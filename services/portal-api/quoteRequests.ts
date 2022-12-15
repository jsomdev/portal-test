import { BaseResource } from './base/baseResource';
import { QuoteRequest } from './models/QuoteRequest';
import { OdataCollection } from './o-data';

export async function createQuoteRequest(
  request: QuoteRequest
): Promise<QuoteRequest> {
  const requestResource = new BaseResource<QuoteRequest>('/Me/quoteRequests');
  const quoteRequest = await requestResource.postEntity(
    JSON.stringify(request)
  );
  return { ...request, id: quoteRequest.id };
}

export async function fetchMyQuoteRequest(
  quoteRequestId: string,
  isAuthenticated: boolean
): Promise<QuoteRequest | undefined> {
  if (!isAuthenticated) {
    return undefined;
  }
  const requestResource = new BaseResource<QuoteRequest>('/Me/quoteRequests');
  const data: QuoteRequest = await requestResource.getEntity(
    quoteRequestId,

    {
      selectQuery:
        'id,name,number,contactInfo,submittedOn,emailAddresses,comment,address',
      expandQuery:
        'lines($select=productId,productName,quantity,productNumber;$expand=product($select=id;$expand=image($select=url)))'
    }
  );
  return data;
}

export async function fetchMyQuoteRequests(
  top: number,
  skip: number,
  isAuthenticated: boolean
): Promise<OdataCollection<QuoteRequest> | undefined> {
  if (!isAuthenticated) {
    return undefined;
  }
  const requestResource = new BaseResource<QuoteRequest>('/Me/quoteRequests');
  const data: OdataCollection<QuoteRequest> = await requestResource.getEntities(
    {
      includeCount: true,
      selectQuery: 'id,name,number,contactInfo,submittedOn',
      expandQuery:
        'lines($select=productId,productName,quantity,productNumber;$expand=product($select=id,name,number;$expand=image($select=url)))',
      orderbyQuery: 'submittedOn desc',
      top,
      skip
    }
  );
  return data;
}
