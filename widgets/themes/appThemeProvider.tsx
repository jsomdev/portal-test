import React from 'react';

import { ThemeProvider } from '@fluentui/react';

import { appTheme } from './themes';

export const AppThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
