import { BaseResource } from '../base/baseResource';
import { Model } from '../models/Model';

export class ModelsResource extends BaseResource<Model> {
  constructor() {
    super('/Models');
  }
}
