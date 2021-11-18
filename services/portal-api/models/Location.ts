/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';
import type { Coordinates } from './Coordinates';
import type { LinkedEntity } from './LinkedEntity';
import type { LocationDetailsFlags } from './LocationDetailsFlags';
import type { LocationSettingsFlags } from './LocationSettingsFlags';
import type { LocationType } from './LocationType';
import type { PostalAddress } from './PostalAddress';
import type { Url } from './Url';

export type Location = LinkedEntity & {
  type?: LocationType;
  details?: LocationDetailsFlags | null;
  settings?: LocationSettingsFlags | null;
  postalAddress?: PostalAddress | null;
  contactInfo?: ContactInfo | null;
  coordinates?: Coordinates | null;
  urls?: Array<Url | null>;
};
