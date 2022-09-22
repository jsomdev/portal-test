import { BaseResource } from '../base/baseResource';
import { AttributeGroup } from '../models/AttributeGroup';

export class AttributeGroupsResource extends BaseResource<AttributeGroup> {
  constructor() {
    super('/AttributeGroups');
  }
}
