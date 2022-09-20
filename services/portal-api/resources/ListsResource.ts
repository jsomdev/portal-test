import { BaseResource } from '../base/baseResource';
import { List } from '../models/List';
export class ListsResource extends BaseResource<List> {
  constructor() {
    super('/Lists');
  }
}
