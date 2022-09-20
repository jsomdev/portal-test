import { BaseResource } from '../base/baseResource';
import { Site } from '../models/Site';

export class SitesResource extends BaseResource<Site> {
  constructor() {
    super('/Sites');
  }
}
