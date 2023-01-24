import React, { ErrorInfo, ReactNode } from 'react';

import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

import { ErrorMessage } from './errorMessage';

type AppErrorBoundaryState = {
  hasError: boolean;
  error: undefined | Error;
};
type AppErrorBoundaryProps = {
  children: ReactNode;
  silent?: boolean;
};

export class AppErrorBoundary extends React.Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  static contextType = AppInsightsContext;

  static defaultProps = {
    silent: false
  };

  constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.context.trackException({
      error: error,
      exception: error,
      severityLevel: SeverityLevel.Error,
      properties: { ...errorInfo }
    });
  }

  render(): ReactNode {
    const { hasError, error } = this.state;

    if (hasError) {
      if (this.props.silent) {
        return null;
      }
      return <ErrorMessage error={error} logError={false} />;
    }

    return this.props.children;
  }
}
