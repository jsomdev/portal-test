import { Resource } from '../models/Resource';
import { BaseResource } from '../base/baseResource';
export class ResourcesResource extends BaseResource<Resource> {
  constructor() {
    super('/Resources');
  }
}
