import { BaseResource } from '../base/baseResource';
import { Family } from '../models/Family';

export class FamiliesResource extends BaseResource<Family> {
  constructor() {
    super('/Families');
  }
}
