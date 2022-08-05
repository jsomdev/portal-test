export interface MatchedCustomer {
  userInitializationId: string | null;
  accountNumber: string | undefined;
  companyName: string | null;
  addressLines: string[];
  addressPostalCode: string | null;
  addressCity: string | null;
  addressRegion: string | null;
  addressCountry: string | null;
}

export interface MatchedContact {
  emailAddress: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  phoneNumber: string | number | null;
}
export interface MatchCustomersResponse {
  customers: MatchedCustomer[];
  contact: MatchedContact | undefined;
}
