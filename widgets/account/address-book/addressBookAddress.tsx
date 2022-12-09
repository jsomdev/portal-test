import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  DefaultButton,
  Dialog,
  DialogType,
  IButtonStyles,
  IDialogStyles,
  IIconStyles,
  IStackStyles,
  ITextStyles,
  Icon,
  IconButton,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

import { AccountAddress } from '../shared/accountAddress';
import { AddressViewModel } from '../shared/accountAddress.helper';

const messages = defineMessages({
  defaultBilling: {
    id: messageIds.pages.account.overview.addressBook.billingAddress,
    description: 'Default billing address tag',
    defaultMessage: 'Default billing address'
  },
  defaultShipping: {
    id: messageIds.pages.account.overview.addressBook.shippingAddress,
    description: 'Default shipping address tag',
    defaultMessage: 'Default shipping address'
  },
  setAsDefaultBilling: {
    id: messageIds.pages.account.overview.addressBook.setAsDefaultBilling,
    description: 'Set as default billing address button',
    defaultMessage: 'Set as default billing address'
  },
  setAsDefaultShipping: {
    id: messageIds.pages.account.overview.addressBook.setAsDefaultShipping,
    description: 'Set as default shipping address button',
    defaultMessage: 'Set as default shipping address'
  },
  editAddress: {
    id: messageIds.pages.account.overview.addressBook.editAddress,
    description: 'Edit address button',
    defaultMessage: 'Edit address'
  },
  deleteConfirmation: {
    id: messageIds.pages.account.overview.addressBook.deleteConfirmation,
    description: 'Delete address confirmation dialog',
    defaultMessage: 'Are you sure you want to delete this address?'
  },
  deleteText: {
    id: messageIds.pages.account.overview.addressBook.deleteButtonText,
    description: 'Delete address button',
    defaultMessage: 'Delete address'
  },
  cancelText: {
    id: messageIds.pages.account.overview.addressBook.cancelButtonText,
    description: 'Cancel button',
    defaultMessage: 'Cancel'
  }
});

interface AddressBookAddressProps {
  address: AddressViewModel;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  onSetAsBillingClick?: () => void;
  onSetAsShippingClick?: () => void;
}

export const AddressBookAddress: React.FC<AddressBookAddressProps> = ({
  address,
  isDefaultBilling,
  isDefaultShipping,
  onEditClick,
  onSetAsBillingClick,
  onSetAsShippingClick,
  onDeleteClick
}) => {
  const { semanticColors, effects } = useTheme();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const styles: IStackStyles = {
    root: {
      border: `1px solid ${semanticColors.variantBorder}`,
      borderRadius: effects.roundedCorner4,
      flex: '1 1 0',
      minWidth: rem(300)
    }
  };

  return (
    <Stack styles={styles}>
      <AddressBookAddressTopSection address={address} />
      <AddressBookAddressActions
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        isDefaultBilling={isDefaultBilling}
        isDefaultShipping={isDefaultShipping}
        onEditClick={onEditClick}
        onSetAsBillingClick={onSetAsBillingClick}
        onSetAsShippingClick={onSetAsShippingClick}
      />
      <DeleteAddressDialog
        address={address}
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        onDeleteClick={onDeleteClick}
      />
    </Stack>
  );
};

const AddressBookAddressTopSection: React.FC<{ address: AddressViewModel }> = ({
  address
}) => {
  const { spacing } = useTheme();
  return (
    <Stack>
      {address.name && (
        <Stack
          tokens={{ padding: spacing.m }}
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          <Stack>
            <Text variant="mediumPlus">{address.name}</Text>
          </Stack>
        </Stack>
      )}
      <Stack tokens={{ padding: `0 ${spacing.m} ${spacing.m}` }}>
        <AccountAddress address={address} contentSpacing={spacing.s2} />
      </Stack>
    </Stack>
  );
};

interface AddressBookAddressActionsProps {
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  onSetAsBillingClick?: () => void;
  onSetAsShippingClick?: () => void;
  setIsDeleteDialogOpen: (value: boolean) => void;
}

interface AddressBookAddressActionsStyles {
  actionButton: IButtonStyles;
  tagContainer: IStackStyles;
  buttonContainer: IStackStyles;
  checkmark: IIconStyles;
  deleteButton: IButtonStyles;
  editButton: IButtonStyles;
  greenText: ITextStyles;
}

const AddressBookAddressActions: React.FC<AddressBookAddressActionsProps> = ({
  isDefaultBilling,
  isDefaultShipping,
  onDeleteClick,
  onEditClick,
  onSetAsBillingClick,
  onSetAsShippingClick,
  setIsDeleteDialogOpen
}) => {
  const { spacing, semanticColors, palette, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const styles: AddressBookAddressActionsStyles = {
    actionButton: {
      root: {
        height: 'auto',
        margin: 0,
        padding: 0
      },
      icon: {
        margin: `0 ${spacing.s1} 0 0`
      }
    },
    tagContainer: {
      root: {
        borderTop: `1px solid ${semanticColors.variantBorder}`,
        marginTop: 'auto !important',
        minHeight: rem(65)
      }
    },
    editButton: {
      icon: {
        ...fonts.large
      }
    },
    greenText: {
      root: {
        color: palette.themeSecondary
      }
    },
    checkmark: {
      root: {
        color: palette.themeSecondary
      }
    },
    buttonContainer: {
      root: {
        minWidth: rem(200),
        minHeight: rem(18)
      }
    },
    deleteButton: {
      root: {
        margin: 0
      },
      icon: {
        margin: 0
      }
    }
  };

  return (
    <Stack
      styles={styles.tagContainer}
      horizontalAlign="space-between"
      verticalAlign="center"
      horizontal
      wrap
    >
      <Stack
        tokens={{ padding: `${spacing.m}`, childrenGap: spacing.m }}
        horizontal
        wrap
      >
        {isDefaultShipping && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
            styles={styles.buttonContainer}
          >
            <Icon iconName="CheckMark" styles={styles.checkmark} />
            <Text styles={styles.greenText}>
              {formatMessage(messages.defaultShipping)}
            </Text>
          </Stack>
        )}
        {onSetAsShippingClick && !isDefaultShipping && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
            styles={styles.buttonContainer}
          >
            <ActionButton
              text={formatMessage(messages.setAsDefaultShipping)}
              iconProps={{ iconName: 'Send' }}
              onClick={onSetAsShippingClick}
              styles={styles.actionButton}
            />
          </Stack>
        )}
        {isDefaultBilling && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
            styles={styles.buttonContainer}
          >
            <Icon iconName="CheckMark" styles={styles.checkmark} />
            <Text styles={styles.greenText}>
              {formatMessage(messages.defaultBilling)}
            </Text>
          </Stack>
        )}
        {onSetAsBillingClick && !isDefaultBilling && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
            styles={styles.buttonContainer}
          >
            <ActionButton
              text={formatMessage(messages.setAsDefaultBilling)}
              iconProps={{ iconName: 'DocumentSet' }}
              onClick={onSetAsBillingClick}
              styles={styles.actionButton}
            />
          </Stack>
        )}
      </Stack>
      <Stack
        tokens={{ padding: `${spacing.m}`, childrenGap: spacing.m }}
        horizontal
        wrap
      >
        {onEditClick && (
          <Stack
            horizontal
            verticalAlign="center"
            tokens={{ childrenGap: spacing.s1 }}
          >
            <ActionButton
              text={formatMessage(messages.editAddress)}
              iconProps={{ iconName: 'Edit' }}
              onClick={onEditClick}
              styles={styles.actionButton}
            />
          </Stack>
        )}
        {onDeleteClick ||
          (!isDefaultBilling && !isDefaultShipping && (
            <Stack
              horizontal
              verticalAlign="center"
              tokens={{ childrenGap: spacing.s1 }}
            >
              <IconButton
                iconProps={{ iconName: 'Trash' }}
                onClick={() => {
                  setIsDeleteDialogOpen(true);
                }}
                styles={styles.deleteButton}
              />
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

interface DeleteAddressDialogProps {
  address: AddressViewModel;
  onDeleteClick?: () => void;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (value: boolean) => void;
}

interface DeleteAddressDialogStyles {
  dialog: Partial<IDialogStyles>;
  dialogActionButton: IButtonStyles;
}

const DeleteAddressDialog: React.FC<DeleteAddressDialogProps> = ({
  address,
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  onDeleteClick
}) => {
  const { spacing, fonts } = useTheme();
  const { formatMessage } = useIntl();

  const styles: DeleteAddressDialogStyles = {
    dialog: {
      main: {
        height: 'auto',
        minHeight: 'auto',
        '.ms-Dialog-title': {
          ...fonts.large
        }
      }
    },
    dialogActionButton: {
      root: {
        width: '100%'
      }
    }
  };

  return (
    <Dialog
      hidden={!isDeleteDialogOpen}
      dialogContentProps={{
        type: DialogType.normal,
        title: formatMessage(messages.deleteConfirmation)
      }}
      modalProps={{
        isBlocking: false,
        allowTouchBodyScroll: true
      }}
      styles={styles.dialog}
      onDismiss={() => setIsDeleteDialogOpen(false)}
    >
      <Stack tokens={{ childrenGap: spacing.m }}>
        {address.name && <Text variant="mediumPlus">{address.name}</Text>}
        <AccountAddress address={address} contentSpacing={spacing.s2} />
        <Stack horizontal grow tokens={{ childrenGap: spacing.s1 }}>
          <PrimaryButton
            onClick={() => {
              onDeleteClick && onDeleteClick();
              setIsDeleteDialogOpen(false);
            }}
            text={formatMessage(messages.deleteText)}
            styles={styles.dialogActionButton}
          />
          <DefaultButton
            onClick={() => setIsDeleteDialogOpen(false)}
            text={formatMessage(messages.cancelText)}
            styles={styles.dialogActionButton}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
};
