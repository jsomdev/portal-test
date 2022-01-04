import { Flags } from './Flags';

export enum UserRoles {
  'RegisteredUser' = 1,
  'Employee' = 2,
  'VerifiedCustomer' = 4,
  'AccountManager' = 8,
  'ProductManager' = 16,
  'Administrator' = 32
}

export type UserRolesFlags = Flags<UserRoles>;
