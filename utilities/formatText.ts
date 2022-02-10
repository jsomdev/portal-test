import { AccountInfo } from '@azure/msal-common';
import { User } from '@services/portal-api';

/**
 * Function that formats the display name for the user.
 * @param user the signed in user (/Me)
 * @param accountInfo the signed in user (Token)
 * @returns string that represents the display name for the user
 */
export function formatUserDisplayName(
  user: User | undefined,
  accountInfo: AccountInfo | null,
  fallBackText: string = ''
): string {
  // If the logged in user has a firstName and a lastName in the User.ContactInfo we want to return that
  if (!!user?.contactInfo?.firstName && !!user.contactInfo?.lastName) {
    return `${user.contactInfo.firstName} ${user.contactInfo.lastName}`;
  }

  // If the accountInfo is not null return the name if defined, or username (required) otherwise
  if (accountInfo) {
    return accountInfo.name || accountInfo.username;
  }

  // Otherwise return the fallback
  return fallBackText;
}

export function camelCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace('-', '');
}
