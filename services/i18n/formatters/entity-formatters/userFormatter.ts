import { AccountInfo } from '@azure/msal-browser';
import { User } from '@services/portal-api/models/User';

export class UserFormatter {
  private user: Partial<User> | undefined;
  private accountInfo: Partial<AccountInfo> | null;
  constructor(
    user: Partial<User> | undefined,
    accountInfo: Partial<AccountInfo> | null
  ) {
    this.user = user;
    this.accountInfo = accountInfo;
  }

  public formatDisplayName(fallBack: string = ''): string {
    // If the logged in user has a firstName and a lastName in the User.ContactInfo we want to return that
    if (this.user?.contactInfo?.firstName && this.user?.contactInfo?.lastName) {
      return `${this.user.contactInfo.firstName} ${this.user.contactInfo.lastName}`;
    }

    // Fallback to any of the properties in the accountInfo or the provided fallback
    return this.accountInfo?.name || this.accountInfo?.username || fallBack;
  }
}
