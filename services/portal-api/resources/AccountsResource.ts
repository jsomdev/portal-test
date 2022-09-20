import { BaseResource } from '../base/baseResource';
import { Account } from '../models/Account';

export class AccountsResource extends BaseResource<Account> {
  constructor() {
    super('/Accounts');
  }
}
