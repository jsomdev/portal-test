import { User } from '../models/User';
import { BaseResource } from '../base/baseResource';
export class UsersResource extends BaseResource<User> {
  constructor() {
    super('/Users');
  }
}
