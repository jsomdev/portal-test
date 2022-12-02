import { ErpApiError } from '@services/portal-api/base/erpApiError';

export type OrderError = { message: string; name: string };

export enum CreateOrderErrorName {
  UserDoesNotHaveAccount = 'UserDoesNotHaveAccount',
  CartHasNoPricedItems = 'CartHasNoPricedItems',
  CartIsEmpty = 'CartIsEmpty',
  ContentTypeHeaderMissing = 'ContentTypeHeaderMissing',
  InvalidPaymentMethod = 'InvalidPaymentMethod',
  GivenAmountAndCalculatedAmountDoNotMatch = 'GivenAmountAndCalculatedAmountDoNotMatch',
  CardIsDeclined = 'CardIsDeclined',
  CardNumberIsInvalid = 'CardNumberIsInvalid',
  TODO = 'TODO'
}

export class CreateOrderError extends ErpApiError {
  constructor(erpApiError: ErpApiError, method: string) {
    super(erpApiError.status, method, erpApiError.message);
    this.name = erpApiError.name;
    this.validateErrorName(erpApiError);
    this.message = erpApiError.message;
  }

  private validateErrorName(error: ErpApiError) {
    if (
      !Object.values(CreateOrderErrorName).includes(
        error.name as CreateOrderErrorName
      )
    ) {
      console.warn('A wrong error has been passed to the CreateOrderError');
    }
  }
}
