import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Form, Formik } from 'formik';
import { Guid } from 'guid-typescript';
import { defineMessages, useIntl } from 'react-intl';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  DefaultButton,
  IButtonStyles,
  IPanelStyles,
  MessageBarType,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { AddressBookContext } from '@providers/address-book/addressBookContext';
import { getValidPostalAddressFromUserAddress } from '@providers/address-book/addressBookHelper';
import { messageIds } from '@services/i18n';
import { PostalAddress } from '@services/portal-api';
import { UserAddress } from '@services/portal-api/base/types';
import { rem } from '@utilities/rem';
import { getTouchedFields } from '@widgets/checkout/shared/getTouchedFields';

import { AddressBookFormData, validation } from './addressBookForm.helper';
import { AddressBookFormGroup } from './addressBookFormGroup';

interface AddressBookFormProps {
  editAddress: string | 'new' | undefined;
  setEditAddress: (value: string | undefined) => void;
}

interface AddressBookFormStyles {
  panel: Partial<IPanelStyles>;
  actionButton: Partial<IButtonStyles>;
}

const defaultValues: AddressBookFormData = {
  name: '',
  country: 'US',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  setAsBilling: false,
  setAsShipping: false
};

const messages = defineMessages({
  title: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.title,
    defaultMessage: 'Address',
    description: 'Address book panel title'
  },
  ariaClose: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.ariaClose,
    description: 'Arialabel to close the panel',
    defaultMessage: 'Close'
  },
  cancel: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.cancel,
    defaultMessage: 'Cancel',
    description: 'Address book panel close'
  },
  save: {
    id: messageIds.pages.account.sections.infoAndPreferences.sections
      .addressBook.panel.save,
    defaultMessage: 'Submit',
    description: 'Address book panel save'
  },
  createAddressError: {
    id: messageIds.pages.account.overview.addressBook.createAddressError,
    defaultMessage: 'An error occurred while creating the address.',
    description: 'Error message when creating an address fails'
  }
});

export const AddressBookForm: React.FC<AddressBookFormProps> = ({
  editAddress,
  setEditAddress
}) => {
  const { spacing, palette, semanticColors } = useTheme();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const {
    getAddress,
    createOrUpdateAddress,
    billingAddress,
    shippingAddress,
    createOrUpdateAddressError,
    createOrUpdateAddressStatus
  } = useContext(AddressBookContext);
  const { formatMessage } = useIntl();

  //an effect that sets and clears a timeout to show the error message
  useEffect(() => {
    if (createOrUpdateAddressError) {
      setShowErrorMessage(true);
    }
    const timeout = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [createOrUpdateAddressError]);

  const defaultAndPrefilledValues = useMemo(() => {
    const addressId = editAddress === 'new' ? undefined : editAddress;
    if (addressId) {
      const address: UserAddress | undefined = getAddress(addressId);
      const postalAddress: PostalAddress =
        getValidPostalAddressFromUserAddress(address);

      return {
        address: postalAddress?.lines?.[0] || '',
        city: postalAddress?.city || '',
        country: postalAddress?.country || 'US',
        name: address?.name || '',
        state: postalAddress?.region || '',
        postalCode: postalAddress?.postalCode || '',
        setAsBilling: billingAddress?.id === addressId,
        setAsShipping: shippingAddress?.id === addressId
      };
    }
    return defaultValues;
  }, [billingAddress?.id, editAddress, getAddress, shippingAddress?.id]);

  const initialTouched = useMemo(() => {
    return getTouchedFields(defaultAndPrefilledValues);
  }, [defaultAndPrefilledValues]);

  const onFormSubmit = useCallback(
    (
      formValues: AddressBookFormData | UserAddress,
      addressId: string | undefined
    ): void => {
      createOrUpdateAddress({
        address: {
          id: addressId ? addressId : `${Guid.create()}`,
          city: formValues.city,
          country: formValues.country,
          lines: [formValues.address],
          name: formValues.name,
          postalCode: formValues.postalCode,
          region: formValues.state
        },
        setAsDefaultBilling: formValues.setAsBilling,
        setAsDefaultShipping: formValues.setAsShipping
      })
        .then(value => {
          if (value) {
            setEditAddress(undefined);
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    [createOrUpdateAddress, setEditAddress]
  );

  const styles: AddressBookFormStyles = {
    panel: {
      content: {
        background: palette.white,
        padding: 0
      },
      contentInner: {
        background: palette.white
      },
      scrollableContent: {
        background: palette.white
      },
      commands: {
        padding: 0,
        position: 'sticky'
      },
      navigation: {
        height: 80,
        background: palette.white,
        padding: spacing.m,
        borderBottom: `1px solid ${semanticColors.variantBorder}`
      },
      header: {
        padding: 0,
        margin: 'auto'
      },
      subComponentStyles: {
        closeButton: {
          root: {
            margin: 'auto'
          }
        }
      }
    },
    actionButton: {
      root: {
        width: '100%'
      }
    }
  };

  return (
    <Panel
      isLightDismiss
      isOpen={!!editAddress}
      headerText={formatMessage(messages.title)}
      onDismiss={() => {
        setEditAddress(undefined);
      }}
      styles={styles.panel}
      type={PanelType.custom}
      customWidth={rem(600)}
      isBlocking
      hasCloseButton={true}
    >
      <Formik<AddressBookFormData>
        initialValues={defaultAndPrefilledValues}
        initialTouched={initialTouched}
        validationSchema={validation}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onFormSubmit(
            values,
            editAddress !== 'new' && editAddress ? editAddress : undefined
          );
        }}
      >
        <Form noValidate>
          <Stack tokens={{ padding: spacing.l1, childrenGap: spacing.m }}>
            {showErrorMessage && (
              <PortalMessageBar messageBarType={MessageBarType.error}>
                <Text>{formatMessage(messages.createAddressError)}</Text>
              </PortalMessageBar>
            )}
            <AddressBookFormGroup
              isDefaultBilling={billingAddress?.id === editAddress}
              isDefaultShipping={shippingAddress?.id === editAddress}
            />
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m, padding: spacing.l1 }}
          >
            <DefaultButton
              onClick={() => {
                setEditAddress(undefined);
              }}
              disabled={createOrUpdateAddressStatus === 'loading'}
              text={formatMessage(messages.cancel)}
              styles={styles.actionButton}
            />
            <PrimaryButton
              type="submit"
              disabled={createOrUpdateAddressStatus === 'loading'}
              text={formatMessage(messages.save)}
              styles={styles.actionButton}
            />
          </Stack>
        </Form>
      </Formik>
    </Panel>
  );
};
