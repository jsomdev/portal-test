import { AccountInfo } from '@azure/msal-browser';
import { User } from '@services/portal-api/models/User';

export class UserFormatter {
  private user: Partial<User> | undefined;
  private accountInfo: Partial<AccountInfo> | null | undefined;
  constructor(
    user: Partial<User> | undefined,
    accountInfo: Partial<AccountInfo> | null | undefined
  ) {
    this.user = user;
    this.accountInfo = accountInfo;
  }

  public formatDisplayName(fallBack: string = ''): string {
    if (
      this.accountInfo?.idTokenClaims?.given_name ||
      this.accountInfo?.idTokenClaims?.family_name
    ) {
      if (!this.accountInfo?.idTokenClaims?.given_name) {
        return `${this.accountInfo?.idTokenClaims?.family_name}`;
      }
      if (!this.accountInfo?.idTokenClaims?.family_name) {
        return `${this.accountInfo?.idTokenClaims?.given_name}`;
      }
      return `${this.accountInfo.idTokenClaims.given_name} ${this.accountInfo.idTokenClaims.family_name}`.trim();
    }

    if (this.user?.contactInfo?.firstName || this.user?.contactInfo?.lastName) {
      if (!this.user?.contactInfo?.firstName) {
        return `${this.user?.contactInfo?.lastName}`;
      }
      if (!this.user?.contactInfo?.lastName) {
        return `${this.user?.contactInfo?.firstName}`;
      }
      return `${this.user.contactInfo.firstName} ${this.user.contactInfo.lastName}`.trim();
    }

    return fallBack;
  }
}
