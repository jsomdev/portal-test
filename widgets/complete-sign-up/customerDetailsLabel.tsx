import React, { useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  IconButton,
  Image,
  Label,
  Modal,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n';

import {
  CustomerDetailsLabelProps,
  CustomerDetailsLabelStyles
} from './customerDetailsLabel.types';

const messages = defineMessages({
  tooltipLabel: {
    id: messageIds.signupFlow.tooltipLabel,
    defaultMessage: 'Where can I find this?'
  }
});

export const CustomerDetailsLabel: React.FC<CustomerDetailsLabelProps> = ({
  labelText,
  modalTitle,
  modalText,
  modalImage
}) => {
  const { spacing } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const { formatMessage } = useIntl();

  // TODO: Styling Conventions
  const styles: CustomerDetailsLabelStyles = {
    image: {
      root: {
        maxWidth: '100%'
      },
      image: {
        maxWidth: '100%'
      }
    }
  };

  return (
    <Stack>
      <Stack.Item>
        <Stack
          horizontal
          verticalAlign="center"
          tokens={{ childrenGap: spacing.s1 }}
        >
          <Label>{labelText}</Label>
          <ActionButton
            onClick={() => {
              setShowModal(true);
            }}
          >
            {formatMessage(messages.tooltipLabel)}
            <Modal
              isOpen={showModal}
              onDismiss={() => {
                setShowModal(false);
              }}
              isBlocking={false}
            >
              <Stack
                tokens={{
                  childrenGap: spacing.l1,
                  padding: spacing.l1,
                  maxWidth: 660
                }}
              >
                <Stack.Item>
                  <Stack horizontal horizontalAlign="space-between">
                    <Stack.Item>
                      <Text variant="xLarge">{modalTitle}</Text>
                    </Stack.Item>
                    <Stack.Item>
                      <IconButton
                        iconProps={{ iconName: 'ChromeClose' }}
                        onClick={() => setShowModal(false)}
                      />
                    </Stack.Item>
                  </Stack>
                </Stack.Item>
                <Stack.Item>
                  <Text>{modalText}</Text>
                </Stack.Item>
                <Stack.Item>
                  <Image styles={styles.image} src={modalImage} />
                </Stack.Item>
              </Stack>
            </Modal>
          </ActionButton>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
