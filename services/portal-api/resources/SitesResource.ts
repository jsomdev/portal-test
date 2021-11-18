import { Site } from '../models/Site';
import { BaseResource } from '../base/baseResource';
export class SitesResource extends BaseResource<Site> {
  constructor() {
    super('/Sites');
  }
}
