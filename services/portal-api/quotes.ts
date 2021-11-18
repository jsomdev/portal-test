import { BaseResource } from './base/baseResource';
import { QuoteRequest } from './models/QuoteRequest';

export async function createQuoteRequest(
  request: QuoteRequest
): Promise<QuoteRequest> {
  try {
    const requestResource = new BaseResource<QuoteRequest>(
      '/SubmitQuoteRequest'
    );
    await requestResource.postEntity(JSON.stringify(request));
    return request;
  } catch (e) {
    throw e;
  }
}
