import { List } from '../models/List';
import { BaseResource } from '../base/baseResource';
export class ListsResource extends BaseResource<List> {
  constructor() {
    super('/Lists');
  }
}
