import { Series } from '../models/Series';
import { BaseResource } from '../base/baseResource';
export class SeriesResource extends BaseResource<Series> {
  constructor() {
    super('/Series');
  }
}
