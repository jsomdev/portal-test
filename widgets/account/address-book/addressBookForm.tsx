import React, { useCallback, useContext, useMemo } from 'react';

import { Form, Formik } from 'formik';
import { Guid } from 'guid-typescript';
import { defineMessages, useIntl } from 'react-intl';

import { ClosePanelButton } from '@components/buttons/closePanelButton';
import {
  DefaultButton,
  IButtonStyles,
  IPanelStyles,
  IStackStyles,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
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
  panelHeader: IStackStyles;
  closeButton: Partial<IButtonStyles>;
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
  }
});

export const AddressBookForm: React.FC<AddressBookFormProps> = ({
  editAddress,
  setEditAddress
}) => {
  const { spacing, palette, semanticColors } = useTheme();
  const { getAddress, createOrUpdateAddress, billingAddress, shippingAddress } =
    useContext(AddressBookContext);
  const { formatMessage } = useIntl();

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
      }).catch(error => {
        console.error(error);
      });
    },
    [createOrUpdateAddress]
  );

  const styles: AddressBookFormStyles = {
    panel: {
      commands: {
        background: palette.white,
        zIndex: 1
      },
      scrollableContent: {
        marginRight: spacing.s1
      },
      content: {
        padding: `0 ${spacing.l1}`
      },
      main: {
        background: palette.white,
        paddingBottom: spacing.l1,
        maxWidth: rem('425px'),
        cursor: 'default'
      },
      root: {
        cursor: 'default'
      },
      navigation: {
        display: 'none'
      }
    },
    actionButton: {
      root: {
        width: '100%'
      }
    },

    panelHeader: {
      root: {
        background: palette.white,
        borderBottom: `1px solid ${semanticColors.variantBorder}`,
        height: rem(90),
        padding: `0 ${spacing.s1}`
      }
    },
    closeButton: {
      icon: {
        color: palette.neutralPrimary
      }
    }
  };

  return (
    <Panel
      isLightDismiss
      isOpen={!!editAddress}
      onDismiss={() => {
        setEditAddress(undefined);
      }}
      styles={styles.panel}
      allowTouchBodyScroll={true}
      type={PanelType.custom}
      customWidth={rem(600)}
      isBlocking
      hasCloseButton={false}
      isFooterAtBottom={true}
      onRenderHeader={props => (
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
          // tokens={{ padding: `${rem(25)} ${spacing.s1}` }}
          styles={styles.panelHeader}
        >
          <ClosePanelButton
            iconProps={{
              iconName: 'Cancel'
            }}
            onClick={() => props?.onDismiss?.()}
            title={formatMessage(messages.ariaClose)}
            text={formatMessage(messages.title)}
            styles={styles.closeButton}
          />
        </Stack>
      )}
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
          setEditAddress(undefined);
        }}
      >
        <Form noValidate>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m, padding: `${spacing.l1} 0` }}
            wrap={true}
          >
            <AddressBookFormGroup
              isDefaultBilling={billingAddress?.id === editAddress}
              isDefaultShipping={shippingAddress?.id === editAddress}
            />
          </Stack>
          <Stack
            horizontal
            horizontalAlign="space-between"
            tokens={{ childrenGap: spacing.m }}
          >
            <PrimaryButton
              type="submit"
              text={formatMessage(messages.save)}
              styles={styles.actionButton}
            />
            <DefaultButton
              onClick={() => {
                setEditAddress(undefined);
              }}
              text={formatMessage(messages.cancel)}
              styles={styles.actionButton}
            />
          </Stack>
        </Form>
      </Formik>
    </Panel>
  );
};
