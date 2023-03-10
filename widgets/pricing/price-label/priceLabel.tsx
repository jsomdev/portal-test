import React from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  ActionButton,
  DirectionalHint,
  IButtonStyles,
  ILabelStyles,
  ITooltipHostStyles,
  Icon,
  Label,
  MessageBarType,
  Shimmer,
  ShimmerElementType,
  ShimmerElementsGroup,
  Stack,
  Text,
  TooltipHost,
  useTheme
} from '@fluentui/react';
import { useMe } from '@providers/user/userContext';
import { customerLoginRequest } from '@services/authentication/authenticationConfiguration';
import { messageIds } from '@services/i18n';
import { ReactQueryStatus } from '@services/react-query/types';

import { PricePrimaryText } from './pricePrimaryText';
import { PriceSecondaryText } from './priceSecondaryText';

type PriceLabelSize = 'small' | 'medium' | 'large';
interface PriceLabelProps {
  primaryText: string;
  secondaryText?: string | undefined;
  status: ReactQueryStatus;
  suffix?: string | undefined;
  tooltipText?: string | undefined;
  // defaults to "medium"
  size?: PriceLabelSize;
  order?: 'primaryFirst' | 'secondaryFirst';
}

interface PriceLabelStyles {
  tooltipHost: Partial<ITooltipHostStyles>;
  suffix: ILabelStyles;
  signInLink: IButtonStyles;
}

const messages = defineMessages({
  error: {
    id: messageIds.pricing.error,
    defaultMessage: 'Error loading pricing',
    description: 'Text to show when there is an error loading the price'
  },
  signIn: {
    id: messageIds.pricing.signInForDetails,
    defaultMessage: 'Sign in for pricing details',
    description: 'Button text to sign in if no pricing'
  }
});

/**
 * This comoponent will render =a label for the (main) price, a secondary price (that will be crossed out) and a unti suffix.
 * There is also a tooltip with additional information that will be triggered when hovering over the icon.
 * @param primaryText This is the main price, highlighted in green and bold
 * @param status The status of the pricing data from React Query
 * @param secondaryText (optional) This is the base price of the item, displayed as crossed out text
 * @param suffix (optional) This is used for unit text ( / each)
 * @param size (optional) This is the size of the label. Defaults to "medium"
 * @param tooltipText (optional) The text that is displayed in the tooltip at the end of the label
 * @param order (optional) This is the order of the primary and secondary text. Defaults to "secondaryFirst"
 */
export const PriceLabel: React.FC<PriceLabelProps> = ({
  primaryText,
  secondaryText,
  status,
  suffix,
  size,
  tooltipText,
  order = 'secondaryFirst'
}) => {
  const { hasPricing } = useMe();
  const { formatMessage } = useIntl();
  const { spacing, fonts } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  function getSuffixSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 9;
      case 'large':
        return 16;
      default:
        return 12;
    }
  }
  function getShimmerSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 100;
      case 'large':
        return 136;
      default:
        return 110;
    }
  }
  function getPrimaryTextSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 'medium';
      case 'large':
        return 'xLargePlus';
      default:
        return 'large';
    }
  }
  function getSecondaryTextSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 'smallPlus';
      case 'large':
        return 'mediumPlus';
      default:
        return 'medium';
    }
  }

  const styles: PriceLabelStyles = {
    suffix: {
      root: { fontSize: getSuffixSize(size), fontWeight: 400 }
    },
    tooltipHost: {
      root: { display: 'flex', opacity: 0.8 }
    },
    signInLink: {
      root: { padding: 0, height: 'auto' },
      label: {
        lineHeight: fonts.large.fontSize,
        textAlign: 'left'
      }
    }
  };

  if (status === 'error') {
    return (
      <Stack>
        <Stack.Item>
          <PortalMessageBar messageBarType={MessageBarType.error}>
            <Text>{formatMessage(messages.error)}</Text>
          </PortalMessageBar>
        </Stack.Item>
      </Stack>
    );
  }

  if (!isAuthenticated) {
    return (
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: spacing.s2 }}
      >
        <ActionButton
          onClick={() => instance.loginRedirect(customerLoginRequest)}
          text={formatMessage(messages.signIn)}
          iconProps={{ iconName: 'Signin' }}
          styles={styles.signInLink}
        />
      </Stack>
    );
  }
  if (hasPricing === 'None') {
    return null;
  }

  const priceComponents = [
    <PricePrimaryText
      key="primary-price"
      variant={getPrimaryTextSize(size)}
      text={primaryText}
    />,
    secondaryText && (
      <PriceSecondaryText
        key="secondary-price"
        variant={getSecondaryTextSize(size)}
        text={secondaryText}
      />
    )
  ];
  return (
    <Stack>
      <Stack.Item>
        <Shimmer
          customElementsGroup={
            <ShimmerElementsGroup
              width={`${getShimmerSize(size)}px`}
              shimmerElements={[
                {
                  type: ShimmerElementType.line,
                  height: (getShimmerSize(size) * 0.9) / 4.25
                }
              ]}
            />
          }
          width={getShimmerSize(size) * 0.9}
          isDataLoaded={status !== 'loading'}
        >
          <Stack
            horizontal
            tokens={{ childrenGap: spacing.s1 }}
            verticalAlign="center"
          >
            {order === 'primaryFirst'
              ? priceComponents
              : priceComponents.reverse()}
            {suffix && <Label styles={styles.suffix}>{suffix}</Label>}
            {tooltipText && (
              <TooltipHost
                styles={styles.tooltipHost}
                calloutProps={{ gapSpace: 8 }}
                directionalHint={DirectionalHint.topCenter}
                content={tooltipText}
              >
                <Icon iconName="Info" />
              </TooltipHost>
            )}
          </Stack>
        </Shimmer>
      </Stack.Item>
    </Stack>
  );
};
