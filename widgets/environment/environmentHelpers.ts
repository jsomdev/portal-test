import { ClientEnvironment } from './environment.types';

/**
 * Function that checks if target is a valid ClientEnvironment
 * (e.g: if target = Test and strict = true, the function will return true only if the current ClientEnvironment is equal to the target)
 * @param target ClientEnvironment that this validator targets
 * @param strict whether to strictly check for equality or all environments lower than the target
 */
export function isValidClientEnvironment(
  target: ClientEnvironment,
  strict?: boolean
): boolean {
  // Get the current environment
  const currentEnvironment: ClientEnvironment = getCurrentClientEnvironment();

  if (strict) {
    // If strict is true perform an equality check
    return currentEnvironment === target;
  }

  // Return if currentEnvironment is lower than or equal to target environment
  return currentEnvironment <= target;
}

/**
 * Function that returns the ClientEnvironment based on the window.location.origin
 */
export function getCurrentClientEnvironment(): ClientEnvironment {
  switch (window.location.origin) {
    case 'https://localhost:3000':
      return ClientEnvironment.Local;
    case 'https://ssco-sprayportal-as-usnc-dev.azurewebsites.net':
    case 'https://dev-portal.spray.com':
      return ClientEnvironment.Develop;
    case 'https://ssco-sprayportal-as-usnc-test.azurewebsites.net':
    case 'https://test-portal.spray.com':
      return ClientEnvironment.Test;
    case 'https://ssco-sprayportal-as-usnc-stage.azurewebsites.net':
    case 'https://stage-portal.spray.com':
      return ClientEnvironment.Stage;
    case 'https://ssco-sprayportal-as-usnc.azurewebsites.net':
    case 'https://portal.spray.com':
      return ClientEnvironment.Production;
    default:
      return ClientEnvironment.Production;
  }
}
