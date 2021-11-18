import { AttributeType } from '../models/AttributeType';
import { BaseResource } from '../base/baseResource';
export class AttributeTypesResource extends BaseResource<AttributeType> {
  constructor() {
    super('/AttributeTypes');
  }
}
