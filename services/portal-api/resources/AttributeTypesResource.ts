import { BaseResource } from '../base/baseResource';
import { AttributeType } from '../models/AttributeType';

export class AttributeTypesResource extends BaseResource<AttributeType> {
  constructor() {
    super('/attributeTypes');
  }
}
