import { ConditionType } from '../models/ConditionType';
import { BaseResource } from '../base/baseResource';
export class ConditionTypesResource extends BaseResource<ConditionType> {
  constructor() {
    super('/ConditionTypes');
  }
}
