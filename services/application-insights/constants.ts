const appInsightsInstrumentationKeys: Record<string, string> = {
  DEV: '3635d54f-841c-4a6c-b968-d6d8e029b58b',
  TEST: 'b677768d-af1b-477e-95cc-e4a7faa63fb0',
  STAGE: 'b8bb996d-b5cd-4741-b383-2d8d4704e6cd',
  PRODUCTION: 'da3f4d83-ef6c-408f-9551-2da17e4b1ee6'
};

export const getAppInsightsInstrumentationKey = (): string => {
  const appInsightsEnvironment = process.env.NEXT_PUBLIC_APP_INSIGHTS_ENV as
    | string
    | undefined;
  if (
    appInsightsEnvironment &&
    appInsightsInstrumentationKeys[appInsightsEnvironment]
  ) {
    return appInsightsInstrumentationKeys[appInsightsEnvironment];
  }
  throw new Error('App Insights environment not set');
};
