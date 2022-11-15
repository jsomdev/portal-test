import React from 'react';

import { MessageBar, MessageBarType, Stack } from '@fluentui/react';

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
          <MessageBar messageBarType={MessageBarType.error}>
            {errorMessages.defaultErrorMessage}
          </MessageBar>
          <MessageBar messageBarType={MessageBarType.error}>
            {this.state.errorMessage}
          </MessageBar>
        </Stack>
      );
    }
    return this.props.children;
  }
}
