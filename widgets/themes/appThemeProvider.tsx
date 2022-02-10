import React from 'react';

import { initializeIcons, ThemeProvider } from '@fluentui/react';

import { appTheme } from './themes';

initializeIcons();
export const AppThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
