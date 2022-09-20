/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { OdataErrorDetail } from './OdataErrorDetail';

export type OdataErrorMain = {
  code: string;
  message: string;
  target?: string;
  details?: Array<OdataErrorDetail>;
  /**
   * The structure of this object is service-specific
   */
  innererror?: any;
};
