import { AttributeGroup } from '../models/AttributeGroup';
import { BaseResource } from '../base/baseResource';
export class AttributeGroupsResource extends BaseResource<AttributeGroup> {
  constructor() {
    super('/AttributeGroups');
  }
}
