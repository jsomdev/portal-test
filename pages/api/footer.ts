import { NextApiRequest, NextApiResponse } from 'next';

import { FooterDataColumn, footerData } from '@widgets/site-footer/footerData';
import {
  FooterColumnFields,
  FooterColumns
} from '@widgets/site-footer/siteFooter.types';

function getColumnForLocale(
  dataColumn: FooterDataColumn,
  locale: string
): FooterColumnFields {
  return {
    titleMessageId: dataColumn.titleMessageId,
    items: dataColumn.items.map(item => {
      const url =
        item.links[locale] ||
        item.links['x-default'] ||
        'https://www.spray.com';
      return {
        labelMessageId: item.labelMessageId,
        url
      };
    })
  };
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
): void {
  const locale =
    typeof request.query['locale'] === 'string'
      ? request.query['locale'].toLowerCase()
      : 'en';

  const footerClientData: FooterColumns = {
    productCategories: getColumnForLocale(footerData.productCategories, locale),
    industries: getColumnForLocale(footerData.industries, locale),
    applications: getColumnForLocale(footerData.applications, locale),
    services: getColumnForLocale(footerData.services, locale),
    resources: getColumnForLocale(footerData.resources, locale),
    company: getColumnForLocale(footerData.company, locale),
    contact: getColumnForLocale(footerData.contact, locale),
    siteLinks: getColumnForLocale(footerData.siteLinks, locale)
  };
  response.status(200).json(footerClientData);
}
