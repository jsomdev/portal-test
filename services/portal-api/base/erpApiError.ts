import { OdataCollection } from '../o-data/oData';
import { ODataError, OdataException } from '../o-data/oDataException';

function formatErrorMessage(
  status: number,
  method: string,
  message?: string | OdataCollection<string> | OdataException
): string {
  const errorStatus: string = `[${method}] (${status}) `;

  if (method === 'GET') {
    const error: ODataError | undefined =
      (message && (message as OdataException).error) || undefined;
    return errorStatus + ((error && error.message) || 'Something went wrong');
  }
  switch (status) {
    case 400:
      return (
        errorStatus +
        ((message &&
          typeof message !== 'string' &&
          (message as OdataCollection<string>).value &&
          (message as OdataCollection<string>).value.length > 0 &&
          (message as OdataCollection<string>).value.join(',')) ||
          'The server received an bad request')
      );
    case 404:
      return (
        errorStatus +
        ((typeof message === 'string' && message) || 'Resource not found')
      );
    case 500:
      return (
        errorStatus +
        ((typeof message === 'string' && message && (message as string)) ||
          'The server encountered a problem')
      );
    default:
      return (
        errorStatus +
        ((typeof message === 'string' && message && (message as string)) ||
          'Something went wrong')
      );
  }
}
export class ErpApiError extends Error {
  public status: number = 0;

  constructor(
    status: number,
    method: string,
    message?: string | OdataCollection<string> | OdataException
  ) {
    super();
    this.status = status;
    this.name = 'Erp Api Error';
    this.message = formatErrorMessage(status, method, message);
  }
}
