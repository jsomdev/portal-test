import React from 'react';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import { MessageBarType, Stack } from '@fluentui/react';

export const errorMessages = {
  defaultErrorMessage:
    'Oops... Something went wrong! Please notify any of the administrators'
};

interface AppErrorBoundaryProps {
  boundary?: string;
}

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps> {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Stack>
          <PortalMessageBar messageBarType={MessageBarType.error}>
            {errorMessages.defaultErrorMessage}
          </PortalMessageBar>
          <PortalMessageBar messageBarType={MessageBarType.error}>
            {this.state.errorMessage}
          </PortalMessageBar>
        </Stack>
      );
    }
    return this.props.children;
  }
}
