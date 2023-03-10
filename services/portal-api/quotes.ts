import { BaseResource } from './base/baseResource';
import { Quote } from './models/Quote';
import { OdataCollection } from './o-data';

export async function fetchMyQuotes(
  top: number,
  skip: number,
  isAuthenticated: boolean,
  useAccountQuotes: boolean
): Promise<OdataCollection<Quote> | undefined> {
  if (!isAuthenticated) {
    return undefined;
  }
  const requestResource = new BaseResource<Quote>(
    useAccountQuotes ? '/me/account/quotes' : '/me/quotes'
  );
  const data: OdataCollection<Quote> = await requestResource.getEntities({
    includeCount: true,
    selectQuery: 'id,number,issuedOn,totalAmount,currencyCode',
    expandQuery:
      'lines($select=productId,productName,quantity,productNumber;$expand=product($select=id,name,number,slug;$expand=image($select=url)))',
    orderbyQuery: 'issuedOn desc',
    top,
    skip
  });
  return data;
}

export async function fetchMyQuote(
  quoteId: string,
  isAuthenticated: boolean,
  useAccountQuotes: boolean
): Promise<Quote | undefined> {
  if (!isAuthenticated) {
    return undefined;
  }
  const requestResource = new BaseResource<Quote>(
    useAccountQuotes ? '/me/account/quotes' : '/me/quotes'
  );
  const data: Quote = await requestResource.getEntity(quoteId, {
    selectQuery:
      'id,name,number,contactInfo,issuedOn,emailAddresses,address,totalAmount,currencyCode',
    expandQuery:
      'notes,lines($select=productId,productName,quantity,unitAmount,totalAmount,productNumber,currencyCode;$expand=product($select=id,slug;$expand=image($select=url)))'
  });
  return data;
}
