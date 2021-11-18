import { Account } from '../models/Account';
import { BaseResource } from '../base/baseResource';
export class AccountsResource extends BaseResource<Account> {
  constructor() {
    super('/Accounts');
  }
}
