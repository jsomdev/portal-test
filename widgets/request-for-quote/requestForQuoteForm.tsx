import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { FormikProps } from 'formik';
import { defineMessages, useIntl } from 'react-intl';

import { ResponsiveStack } from '@components/stacks/responsiveStack';
import {
  IStackItemStyles,
  IStackStyles,
  Stack,
  getTheme
} from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { useCart } from '@providers/cart/cartContext';
import { messageIds } from '@services/i18n';
import { QuoteRequest } from '@services/portal-api/models/QuoteRequest';
import { scrollToTop } from '@utilities/scrollToTop';
import { CheckoutActions } from '@widgets/checkout/checkoutActions';
import { Steps } from '@widgets/checkout/stepper/steps';
import { Environment } from '@widgets/environment/environment';
import { ClientEnvironment } from '@widgets/environment/environment.types';
import { mediaQueryFrom } from '@widgets/media-queries';

import { useRequestForQuote } from './providers/requestForQuoteProvider';
import { RequestForQuoteSummary } from './request-for-quote-summary/requestForQuoteSummary';
import {
  getCurrentStep,
  mapRequestForQuoteFormValuesToQuoteRequest
} from './requestForQuoteHelper';
import { RequestForQuoteFormValues } from './shared/types';
import step1Details from './steps/step-1-details/step-1-details';
import step2Overview from './steps/step-2-overview/step-2-overview';

interface RequestForQuoteFormStyles {
  container: IStackStyles;
  leftColumn: IStackItemStyles;
  rightColumn: IStackItemStyles;
}

const messages = defineMessages({
  complete: {
    id: messageIds.pages.requestForQuote.actions.submit,
    defaultMessage: 'Confirm and submit'
  }
});

const defaultValues: RequestForQuoteFormValues = {
  details: step1Details.defaultValues,
  overview: step2Overview.defaultValues
};

export const RequestForQuoteForm: React.FC<{
  onCreateRequest: (quoteRequest: QuoteRequest) => Promise<QuoteRequest>;
}> = ({ onCreateRequest }) => {
  const { spacing } = getTheme();
  const { formatMessage } = useIntl();
  const { quoteItems } = useCart();
  const { formValues, setFormValues, steps, stepper } = useRequestForQuote();

  //allows us the access the Formik methods of the form of the current step
  //not possible to use a specific type here, because the type of the form depends on the current step
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeFormRef = useRef<FormikProps<any>>(null);

  const { billingAddress } = useContext(AddressBookContext);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  //set default values for request for quote
  useEffect(() => {
    if (!isInitialLoad) {
      return;
    } else {
      setIsInitialLoad(false);
    }

    setFormValues({
      ...defaultValues
    });
  }, [billingAddress, formValues, isInitialLoad, setFormValues]);

  const { currentStep, currentStepKey, isLastStep } = getCurrentStep(
    steps,
    stepper.currentIndex
  );

  const styles: RequestForQuoteFormStyles = {
    container: {
      root: { marginBottom: '100px' }
    },
    leftColumn: {
      root: { flex: 5 }
    },
    rightColumn: {
      root: {
        flex: 2,
        paddingTop: spacing.l2,
        ...mediaQueryFrom('tablet', {
          paddingTop: 0,
          paddingLeft: spacing.l2
        })
      }
    }
  };

  const onFormSubmit = useCallback(
    (formValues: RequestForQuoteFormValues): void => {
      scrollToTop('body');

      const quoteRequest: QuoteRequest =
        mapRequestForQuoteFormValuesToQuoteRequest(formValues, quoteItems);

      onCreateRequest(quoteRequest);
    },
    [quoteItems, onCreateRequest]
  );

  const onProceed = useCallback(async () => {
    if (activeFormRef.current && currentStepKey) {
      await activeFormRef.current.validateForm();
      const isValid = activeFormRef.current.isValid;

      if (isValid && formValues) {
        setFormValues({
          ...formValues,
          [currentStepKey]: activeFormRef.current.values
        });

        if (isLastStep) {
          onFormSubmit(formValues);
        } else {
          await activeFormRef.current.submitForm();
          stepper.next();
          scrollToTop('body');
        }
      } else {
        activeFormRef.current.submitForm();
      }
    }
  }, [
    currentStepKey,
    formValues,
    isLastStep,
    onFormSubmit,
    setFormValues,
    stepper
  ]);

  const onPrevious = useCallback(() => {
    stepper.previous();
    scrollToTop('body');
  }, [stepper]);

  //don't show anything yet when default values for the form are still being set
  if (!formValues) {
    return null;
  }
  return (
    <ResponsiveStack styles={styles.container} horizontalAlign="space-between">
      <Stack.Item styles={styles.leftColumn}>
        <Stack tokens={{ childrenGap: spacing.l1 }}>
          <Steps
            currentIndex={stepper.currentIndex}
            steps={stepper.steps}
            navigateToStep={stepper.navigateToStep}
          />
          {!currentStep || !currentStepKey ? (
            <Environment target={ClientEnvironment.Develop}>
              Step is missing Component in default export
            </Environment>
          ) : (
            <currentStep.Component
              key={currentStep.index}
              formRef={activeFormRef}
              values={
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                formValues[currentStepKey] as any
              }
              requestForQuoteValues={formValues}
            />
          )}
          <CheckoutActions
            isLastStep={isLastStep}
            onProceedClick={onProceed}
            onPreviousClick={onPrevious}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item styles={styles.rightColumn}>
        <RequestForQuoteSummary
          onPrevious={onPrevious}
          onProceed={onProceed}
          showSubmitButton={isLastStep}
          submitButtonText={formatMessage(messages.complete)}
        />
      </Stack.Item>
    </ResponsiveStack>
  );
};
