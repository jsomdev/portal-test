import { ContactInfo } from '@services/portal-api';

export class ContactInfoFormatter {
  private contactInfo: ContactInfo;

  constructor(contactInfo: ContactInfo) {
    this.contactInfo = contactInfo;
  }

  public formatDisplayName(): string | undefined {
    if (this.contactInfo.firstName && this.contactInfo.lastName) {
      return `${this.contactInfo.firstName} ${this.contactInfo.lastName}`;
    }
    if (this.contactInfo.firstName) {
      return this.contactInfo.firstName;
    }
    if (this.contactInfo.lastName) {
      return this.contactInfo.lastName;
    }
    return undefined;
  }
}
