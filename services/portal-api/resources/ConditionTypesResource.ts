import { BaseResource } from '../base/baseResource';
import { ConditionType } from '../models/ConditionType';

export class ConditionTypesResource extends BaseResource<ConditionType> {
  constructor() {
    super('/ConditionTypes');
  }
}
