import { Family } from '../models/Family';
import { BaseResource } from '../base/baseResource';
export class FamiliesResource extends BaseResource<Family> {
  constructor() {
    super('/Families');
  }
}
