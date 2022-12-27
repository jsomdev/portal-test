import React, { useContext, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { messageIds } from '@services/i18n';
import pagePaths from '@utilities/pagePaths';
import useStepper from '@widgets/checkout/stepper/useStepper';

import {
  RequestForQuoteFormValues,
  RequestForQuoteSteps
} from '../shared/types';
import step1Details from '../steps/step-1-details/step-1-details';
import step2Overview from '../steps/step-2-overview/step-2-overview';
import {
  RequestForQuoteContext,
  RequestForQuoteContextProps
} from './requestForQuoteContext';

const messages = defineMessages({
  details: {
    id: messageIds.pages.checkout.steps.details,
    defaultMessage: 'Details'
  },
  overview: {
    id: messageIds.pages.checkout.steps.overview,
    defaultMessage: 'Overview'
  }
});

export const RequestForQuoteProvider: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState<RequestForQuoteFormValues>();

  const { formatMessage } = useIntl();

  const steps: RequestForQuoteSteps = useMemo(
    () => ({
      details: {
        index: 0,
        label: formatMessage(messages.details),
        iconProps: { iconName: 'ContactInfo' },
        ...step1Details
      },

      overview: {
        index: 1,
        label: formatMessage(messages.overview),
        iconProps: { iconName: 'WaitlistConfirm' },
        ...step2Overview
      }
    }),
    [formatMessage]
  );

  const stepperSteps = Object.values(steps);

  const { push } = useRouter();
  const stepper = useStepper({
    steps: stepperSteps,
    initialIndex: 0,
    onExit: () => push(pagePaths.cart)
  });

  return (
    <RequestForQuoteContext.Provider
      value={{
        formValues,
        setFormValues,
        steps,
        stepper
      }}
    >
      {children}
    </RequestForQuoteContext.Provider>
  );
};

export const useRequestForQuote: () => RequestForQuoteContextProps = () =>
  useContext<RequestForQuoteContextProps>(RequestForQuoteContext);
