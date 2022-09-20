import { BaseResource } from '../base/baseResource';
import { Series } from '../models/Series';
export class SeriesResource extends BaseResource<Series> {
  constructor() {
    super('/Series');
  }
}
