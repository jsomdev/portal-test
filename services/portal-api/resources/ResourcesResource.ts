import { BaseResource } from '../base/baseResource';
import { Resource } from '../models/Resource';
export class ResourcesResource extends BaseResource<Resource> {
  constructor() {
    super('/Resources');
  }
}
