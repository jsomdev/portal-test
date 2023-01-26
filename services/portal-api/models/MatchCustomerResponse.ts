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

// Example data
export const matchedCustomersDummyData: MatchedCustomer[] = [
  {
    userInitializationId: 'abcd1234',
    accountNumber: '123456789',
    companyName: 'ACME Inc.',
    addressLines: ['123 Main St', 'Suite 456'],
    addressPostalCode: '12345',
    addressCity: 'Anytown',
    addressRegion: 'NY',
    addressCountry: 'USA'
  },
  {
    userInitializationId: 'efgh5678',
    accountNumber: '987654321',
    companyName: 'Beta Corp',
    addressLines: ['456 Park Ave'],
    addressPostalCode: '67890',
    addressCity: 'Anothertown',
    addressRegion: 'CA',
    addressCountry: 'USA'
  },
  {
    userInitializationId: 'ijkl9101',
    accountNumber: '111111111',
    companyName: 'Gamma Industries',
    addressLines: ['789 Elm St', 'Apt 123'],
    addressPostalCode: '09876',
    addressCity: 'Yetanothertown',
    addressRegion: 'FL',
    addressCountry: 'USA'
  },
  {
    userInitializationId: 'mnop1213',
    accountNumber: '222222222',
    companyName: 'Delta Enterprises',
    addressLines: ['111 Oak St', 'Unit 456'],
    addressPostalCode: '21436',
    addressCity: 'Sometown',
    addressRegion: 'TX',
    addressCountry: 'USA'
  },
  {
    userInitializationId: 'qrst3415',
    accountNumber: '333333333',
    companyName: 'Epsilon Inc',
    addressLines: ['222 Pine St'],
    addressPostalCode: '34152',
    addressCity: 'Anothercity',
    addressRegion: 'ON',
    addressCountry: 'Canada'
  },
  {
    userInitializationId: 'uvwx5617',
    accountNumber: '444444444',
    companyName: 'Zeta LLC',
    addressLines: ['333 Cedar St', 'Building 4'],
    addressPostalCode: '56178',
    addressCity: 'Yetanothercity',
    addressRegion: 'QC',
    addressCountry: 'Canada'
  }
];
