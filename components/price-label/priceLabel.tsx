import React from 'react';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import {
  ActionButton,
  DirectionalHint,
  FontSizes,
  Icon,
  Label,
  MessageBar,
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

import {
  PriceLabelProps,
  PriceLabelSize,
  PriceLabelStyles
} from './priceLabel.types';
import { PricePrimaryText } from './pricePrimaryText';
import { PriceSecondaryText } from './priceSecondaryText';

const messages = {
  error: 'Error loading pricing',
  signIn: 'Sign in for pricing details.'
};

/**
 * This comoponent will render =a label for the (main) price, a secondary price (that will be crossed out) and a unti suffix.
 * There is also a tooltip with additional information that will be triggered when hovering over the icon.
 * @param primaryText This is the main price, highlighted in green and bold
 * @param status The status of the pricing data from React Query
 * @param secondaryText (optional) This is the base price of the item, displayed as crossed out text
 * @param suffix (optional) This is used for unit text ( / each)
 * @param size (optional) This is used to determine the size of the label
 * @param tooltipText (optional) The text that is displayed in the tooltip at the end of the label
 */
export const PriceLabel: React.FC<PriceLabelProps> = ({
  primaryText,
  secondaryText,
  status,
  suffix,
  size,
  tooltipText
}) => {
  const { hasPricing } = useMe();
  const { spacing } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();
  function getSuffixSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 9;
      case 'large':
        return 14;
      default:
        return 12;
    }
  }
  function getShimmerSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 100;
      case 'large':
        return 120;
      default:
        return 110;
    }
  }
  function getPrimaryTextSize(size: PriceLabelSize | undefined) {
    switch (size) {
      case 'small':
        return 'medium';
      case 'large':
        return 'xLarge';
      default:
        return 'large';
    }
  }
  function getSecundaryTextSize(size: PriceLabelSize | undefined) {
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
        lineHeight: FontSizes.size20,
        textAlign: 'left'
      }
    }
  };

  if (status === 'error') {
    return (
      <Stack>
        <Stack.Item>
          <MessageBar messageBarType={MessageBarType.error}>
            <Text>{messages.error}</Text>
          </MessageBar>
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
          text={messages.signIn}
          iconProps={{ iconName: 'Signin' }}
          styles={styles.signInLink}
        />
      </Stack>
    );
  }
  if (hasPricing === 'None') {
    return null;
  }

  return (
    <Stack>
      <Stack.Item>
        <Shimmer
          customElementsGroup={
            <ShimmerElementsGroup
              width={`${getShimmerSize(size)}px`}
              shimmerElements={[{ type: ShimmerElementType.line, height: 26 }]}
            />
          }
          width={getShimmerSize(size) * 0.9}
          isDataLoaded={status !== 'loading'}
        >
          <Stack
            horizontal
            tokens={{ childrenGap: spacing.s2 }}
            verticalAlign="center"
          >
            <PricePrimaryText
              variant={getPrimaryTextSize(size)}
              text={primaryText}
            />
            {secondaryText && (
              <PriceSecondaryText
                variant={getSecundaryTextSize(size)}
                text={secondaryText}
              />
            )}
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