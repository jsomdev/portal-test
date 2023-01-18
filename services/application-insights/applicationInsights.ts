import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

import { getAppInsightsInstrumentationKey } from './constants';

const defaultBrowserHistory = {
  url: '/',
  location: { pathname: '' },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  listen: () => {}
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let browserHistory: any = defaultBrowserHistory;
if (typeof window !== 'undefined') {
  browserHistory = { ...browserHistory, ...window.history };
  browserHistory.location.pathname = browserHistory?.state?.url;
}

const appInsightsReactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  // For more configuration options see: https://docs.microsoft.com/en-gb/azure/azure-monitor/app/javascript?WT.mc_id=devto-blog-aapowell#configuration
  // Note that AppInsights batches requests to upload metrics ever 15000ms per default.
  config: {
    instrumentationKey: getAppInsightsInstrumentationKey(),
    extensions: [appInsightsReactPlugin],
    extensionConfig: {
      [appInsightsReactPlugin.identifier]: { history: browserHistory }
    }
  }
});

if (typeof window !== 'undefined') {
  appInsights.loadAppInsights();
}

export { appInsights, appInsightsReactPlugin };
