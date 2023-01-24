import { IntlShape, defineMessages } from 'react-intl';
import * as yup from 'yup';
import { InferType } from 'yup';

import { messageIds } from '@services/i18n';
import setYupLocalisation from '@utilities/yup/setYupLocalisation';
import { StepFields } from '@widgets/checkout/shared/types';

setYupLocalisation();

export const validation = yup.object({
  additionalInformation: yup.string(),
  acceptedTerms: yup.boolean().oneOf([true], () => ({
    messageId: messageIds.pages.checkout.overview.fields.acceptedTermsRequired
  }))
});

export type Step2FormData = InferType<typeof validation>;

const messages = defineMessages({
  acceptedTerms: {
    id: messageIds.pages.checkout.overview.fields.acceptedTerms,
    defaultMessage: 'I accept the terms and conditions'
  },
  additionalInformation: {
    id: messageIds.pages.checkout.overview.fields.additionalInformation,
    defaultMessage: 'Additional Information'
  },
  additionalInformationPlaceholder: {
    id: messageIds.pages.checkout.overview.fields
      .additionalInformationPlaceholder,
    defaultMessage: 'Add any additional comments, request or remarks'
  }
});
export const getFields = (intl: IntlShape): StepFields<Step2FormData> => {
  const { formatMessage } = intl;
  return {
    additionalInformation: {
      name: 'additionalInformation',
      label: formatMessage(messages.additionalInformation),
      placeholder: formatMessage(messages.additionalInformationPlaceholder)
    },
    acceptedTerms: {
      name: 'acceptedTerms',
      label: formatMessage(messages.acceptedTerms)
    }
  };
};
