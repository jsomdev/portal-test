import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { Options as IntlMessageFormatOptions } from 'intl-messageformat/src/core';

import { MessageDescriptor } from '@formatjs/intl/src/types';

//TODO is there a way to get this type from intl-package?
export type FormatMessage = (
  descriptor: MessageDescriptor,
  values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>,
  opts?: IntlMessageFormatOptions
) => string;
