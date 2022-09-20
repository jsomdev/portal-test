import { BaseResource } from '../base/baseResource';
import { Application } from '../models/Application';

export class ApplicationsResource extends BaseResource<Application> {
  constructor() {
    super('/Applications');
  }
}
