import { BaseResource } from '../base/baseResource';
import { User } from '../models/User';
export class UsersResource extends BaseResource<User> {
  constructor() {
    super('/Users');
  }
}
