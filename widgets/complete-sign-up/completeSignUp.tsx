import React, { useMemo, useState } from 'react';

import { Form, Formik, FormikTouched } from 'formik';
import { useQuery } from 'react-query';

import { useMsal } from '@azure/msal-react';
import { LoadingOverlay } from '@components/overlays/loadingOverlay';
import { StepContent } from '@components/stepper/stepContent';
import { StepFormValidator } from '@components/stepper/stepFormValidator';
import { Stepper } from '@components/stepper/stepper';
import { DefaultButton, Image, Stack, Text, useTheme } from '@fluentui/react';
import {
  customerLoginRequest,
  employeeLoginRequest
} from '@services/authentication/authenticationConfiguration';
import { useClaims } from '@services/authentication/claims';
import { matchEmailToCustomer } from '@services/portal-api/matchCustomers';
import {
  MatchCustomersResponse,
  MatchedCustomer
} from '@services/portal-api/models/MatchCustomerResponse';
import { QUERYKEYS } from '@services/react-query/constants';

import { useMe } from '../../providers/user/userContext';
import { CompanyBillingAddressStep } from './companyDetailsStep';
import {
  CompanyDetailsFormValues,
  CompleteSignUpFormValues,
  CompleteSignUpStyles,
  ContactDetailsFormValues,
  CustomerDetailsFormValues
} from './completeSignUp.types';
import { CompleteSignUpStepActions } from './completeSignUpStepActions';
import {
  companyDetailsFormInitialValues,
  completeSignUpSteps,
  completeSignUpValidation,
  customerDetailsFormInitialValues
} from './constants';
import { ContactDetailsStep } from './contactDetailsStep';
import { CustomerInformationStep } from './customerDetailsStep';
import { SubmitStep } from './submitStep';

const messages = {
  completeLater: 'Complete your sign up later?',
  signOut: 'Sign out',
  loadingDetail: 'Checking for existing customer...'
};

export const CompleteSignUp: React.FC = () => {
  const { spacing, palette } = useTheme();
  const { instance } = useMsal();

  const { isEmployee } = useClaims();
  const [matchedCustomers, setMatchedCustomers] = useState<MatchedCustomer[]>(
    []
  );
  const [selectedMatchedCustomer, setSelectedMatchedCustomer] = useState<
    MatchedCustomer | undefined
  >(undefined);
  const {
    me,
    meStatus,
    createVerificationRequest,
    createVerificationRequestStatus
  } = useMe();

  const { data: matchedCustomersResponse, status: matchEmailToCustomerStatus } =
    useQuery(
      [QUERYKEYS.matchEmailToCustomer, me?.contactInfo?.emailAddresses?.[0]],
      () => matchEmailToCustomer(me?.contactInfo?.emailAddresses?.[0]),
      {
        enabled: !!me?.contactInfo?.emailAddresses?.[0],
        onSuccess: (matchCustomersResponse: MatchCustomersResponse) => {
          setMatchedCustomers(matchCustomersResponse.customers);
          if (matchCustomersResponse.customers.length === 1) {
            setSelectedMatchedCustomer(matchCustomersResponse.customers[0]);
          }
        }
      }
    );

  // NOTE: Only the Data that is retrieved from the /me and matchEmailToCustomer function is a dependency here!
  //       Changing the selectedMatchedCustomer or disabling the matchedCustomers SHOULD NOT AFFECT this!
  // Based on the data we can (re)initialize the contactDetailsFormValues
  const controlledContactDetailsFormValues: ContactDetailsFormValues =
    React.useMemo(() => {
      return {
        firstName:
          me?.contactInfo?.firstName ||
          matchedCustomersResponse?.contact?.firstName ||
          '',
        lastName:
          me?.contactInfo?.lastName ||
          matchedCustomersResponse?.contact?.lastName ||
          '',
        jobTitle:
          me?.contactInfo?.jobTitle ||
          matchedCustomersResponse?.contact?.jobTitle ||
          '',
        phone:
          me?.contactInfo?.phoneNumber ||
          matchedCustomersResponse?.contact?.phoneNumber?.toString() ||
          '',
        email:
          me?.contactInfo?.emailAddresses?.[0] ||
          matchedCustomersResponse?.contact?.emailAddress ||
          ''
      };
    }, [me, matchedCustomersResponse]);

  // NOTE: Only the DATA that is retrieved from the matchEmailToCustomer function is a dependency here!
  //       Changing the selectedMatchCustomer or disabling the match SHOULD NOT affect this!
  // Based on the data that is sent back from the api we can (re)initialize the companyDetailsFormValues (if there is exactly one match)
  const controlledCompanyDetailsFormValues: CompanyDetailsFormValues =
    React.useMemo(() => {
      if (matchedCustomersResponse?.customers.length === 1) {
        return {
          customerCompany:
            matchedCustomersResponse.customers[0].companyName || ' ',
          address:
            matchedCustomersResponse.customers[0].addressLines.join(', ') ||
            ' ',
          city: matchedCustomersResponse.customers[0].addressCity || ' ',
          country: matchedCustomersResponse.customers[0].addressCountry || ' ',
          state: matchedCustomersResponse.customers[0].addressRegion || ' ',
          zipCode:
            matchedCustomersResponse.customers[0].addressPostalCode || ' '
        };
      }
      return companyDetailsFormInitialValues;
    }, [matchedCustomersResponse]);

  // NOTE: Only the DATA that is retrieved from the matchEmailToCustomer function is a dependency here!
  //       Changing the selectedMatchCustomer or disabling the match SHOULD NOT affect this!
  // Based on the data that is sent back from the api we can initialize the customerDetailsValues (if there is exactly one match)
  const controlledCustomerDetailsFormValues: CustomerDetailsFormValues =
    React.useMemo(() => {
      if (matchedCustomersResponse?.customers.length === 1) {
        return {
          customerNumber: matchedCustomersResponse.customers[0].accountNumber,
          userInitializationId:
            matchedCustomersResponse.customers[0].userInitializationId ||
            undefined,
          invoiceNumbers: []
        };
      }
      return customerDetailsFormInitialValues;
    }, [matchedCustomersResponse]);

  // When the contactDetailsFormValues change, we want to set the fields of the values that were changed to 'Touched'.
  // We also want to 'Untouch' the other fields, so validation is consistent
  const initialTouchedContactDetailsFields: FormikTouched<ContactDetailsFormValues> =
    useMemo(() => {
      const touchedFields: { [key: string]: boolean } = {};

      Object.keys(controlledContactDetailsFormValues).forEach((key: string) => {
        touchedFields[key] =
          !!controlledContactDetailsFormValues[
            key as keyof ContactDetailsFormValues
          ];
      });
      return touchedFields;
    }, [controlledContactDetailsFormValues]);

  //  When the selectedMatchedCustomer changes, we want to set all fields of the values relevant to the customer to 'Touched',
  // We also want to 'Untouch' these fields when there's no longer a selectedMatchedCustomer
  const initialTouchedCompanyDetailsFields: FormikTouched<CompanyDetailsFormValues> =
    useMemo(() => {
      const touchedFields: { [key: string]: boolean } = {};

      Object.keys(companyDetailsFormInitialValues).forEach((key: string) => {
        touchedFields[key] = !!selectedMatchedCustomer;
      });

      return touchedFields;
    }, [selectedMatchedCustomer]);

  // When we want to disable the customer match we need to update 2 state values.
  const disabledCustomerMatch = () => {
    setSelectedMatchedCustomer(undefined);
    setMatchedCustomers([]);
  };

  const styles: CompleteSignUpStyles = {
    root: {
      root: {
        backgroundColor: '#eef1f4',
        minHeight: '100vh',
        width: '100%',
        overflow: 'auto'
      }
    },
    logo: {
      root: {
        marginTop: spacing.m,
        marginBottom: spacing.m,
        display: 'block'
      }
    },
    inner: {
      root: {
        width: '470px',
        maxWidth: '100%',
        maxHeight: '70vh'
      }
    },
    boxContainer: {
      root: {
        width: '100%',
        background: palette.white,
        border: '1px solid #ddd',
        borderRadius: spacing.s2,
        boxShadow: '0 1px 1px rgba(0,0,0,0.05)'
      }
    },
    box: {
      root: {
        marginLeft: '44px',
        marginTop: spacing.l1,
        marginBottom: spacing.l1,

        marginRight: '44px'
      }
    },
    bottomSeperatorText: {
      root: { background: '#fff', padding: '0 10px' }
    },
    bottomContentContainer: {
      root: {
        width: '100%',
        textAlign: 'center',
        marginTop: 32,
        borderBottom: '1px solid black',
        lineHeight: '0.1em'
      }
    },
    formContainer: {
      root: { flex: 1, alignSelf: 'stretch' }
    },
    defaultButton: {
      root: {
        height: 40
      },
      label: {
        fontSize: '14px',
        fontWeight: 400
      }
    }
  };

  if (meStatus === 'loading' || matchEmailToCustomerStatus === 'loading') {
    return <LoadingOverlay spinnerText={messages.loadingDetail} />;
  }

  return (
    <Stack horizontalAlign="center" styles={styles.root}>
      <Stack horizontalAlign="center" styles={styles.inner}>
        <Stack.Item>
          <Image
            styles={styles.logo}
            alt="Company Logo"
            src={
              'https://aadcdn.msftauthimages.net/dbd5a2dd-e9yzigdt9qersmy2mq-mdbwf6zqn9pgwpnmebn98kde/logintenantbranding/0/bannerlogo?ts=637600436904261618'
            }
          />
        </Stack.Item>
        <Stack.Item styles={styles.boxContainer}>
          <Stack horizontalAlign="center" styles={styles.box}>
            <Stack.Item styles={styles.formContainer}>
              <Formik<CompleteSignUpFormValues>
                initialValues={{
                  ...controlledContactDetailsFormValues,
                  ...controlledCompanyDetailsFormValues,
                  ...controlledCustomerDetailsFormValues
                }}
                validationSchema={completeSignUpValidation}
                initialTouched={{
                  ...initialTouchedContactDetailsFields,
                  ...initialTouchedCompanyDetailsFields
                }}
                enableReinitialize={true}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  createVerificationRequest(values);
                }}
              >
                {({ setValues }) => (
                  <Form>
                    <Stepper steps={completeSignUpSteps}>
                      <StepFormValidator />

                      <Stack tokens={{ childrenGap: spacing.l1 }}>
                        <StepContent>
                          <ContactDetailsStep />
                          <CompanyBillingAddressStep
                            matchedCustomers={matchedCustomers}
                            selectedCustomer={selectedMatchedCustomer}
                            onSelectCustomer={customer => {
                              const updatedCompanyDetailsFormValues: CompanyDetailsFormValues =
                                {
                                  customerCompany: customer.companyName || ' ',
                                  address:
                                    customer.addressLines.join(', ') || ' ',
                                  city: customer.addressCity || ' ',
                                  country: customer.addressCountry || ' ',
                                  state: customer.addressRegion || ' ',
                                  zipCode: customer.addressPostalCode || ' '
                                };
                              const updatedCustomerDetailsFormValues: CustomerDetailsFormValues =
                                {
                                  customerNumber: customer.accountNumber || '',
                                  userInitializationId:
                                    customer.userInitializationId || '',
                                  invoiceNumbers: []
                                };
                              setValues(currentState => ({
                                ...currentState,
                                ...updatedCompanyDetailsFormValues,
                                ...updatedCustomerDetailsFormValues
                              }));

                              setSelectedMatchedCustomer(customer);
                            }}
                          />
                          <CustomerInformationStep />
                          <SubmitStep />
                        </StepContent>
                        <CompleteSignUpStepActions
                          isMatchedCustomerSelected={!!selectedMatchedCustomer}
                          matchedCustomersCount={matchedCustomers.length || 0}
                          onSelectManualEntry={() => {
                            setValues(currentState => ({
                              ...currentState,
                              ...companyDetailsFormInitialValues,
                              ...customerDetailsFormInitialValues
                            }));
                            disabledCustomerMatch();
                          }}
                          clearSelectedMatchedCustomer={() => {
                            setValues(currentState => ({
                              ...currentState,
                              ...companyDetailsFormInitialValues,
                              ...customerDetailsFormInitialValues
                            }));
                            setSelectedMatchedCustomer(undefined);
                          }}
                        />

                        {createVerificationRequestStatus !== 'success' && (
                          <React.Fragment>
                            <Stack.Item styles={styles.bottomContentContainer}>
                              <Text styles={styles.bottomSeperatorText}>
                                {messages.completeLater}
                              </Text>
                            </Stack.Item>
                            <DefaultButton
                              onClick={async () =>
                                createVerificationRequestStatus !== 'loading' &&
                                (await instance.logout(
                                  isEmployee
                                    ? employeeLoginRequest
                                    : customerLoginRequest
                                ))
                              }
                              styles={styles.defaultButton}
                            >
                              {messages.signOut}
                            </DefaultButton>
                          </React.Fragment>
                        )}
                      </Stack>
                    </Stepper>
                  </Form>
                )}
              </Formik>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
