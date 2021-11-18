import { Model } from '../models/Model';
import { BaseResource } from '../base/baseResource';
export class ModelsResource extends BaseResource<Model> {
  constructor() {
    super('/Models');
  }
}
