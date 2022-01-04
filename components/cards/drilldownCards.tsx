import React, { CSSProperties } from 'react';

import Image from 'next/image';

import {
  FontWeights,
  IButtonStyles,
  IImageProps,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Category, Product } from '@services/portal-api';

import { DrilldownCardType } from './drilldownCards.types';

interface DrillDownCardContainerProps {
  // The title describing the cards displayed inside
  title?: string;
}

interface DrillDownCardContainerStyles {
  title?: ITextStyles;
  contentContainer?: IStackStyles;
}

/**
 * Compound component that displays an (optional) title
 * and renders the childs inside a stack that will be wrapped if the screensize becomes to small
 */
export const DrillDownCardsContainer: React.FC<DrillDownCardContainerProps> =
  props => {
    const theme = useTheme();
    const { spacing } = theme;
    const { title, children } = props;

    const styles: DrillDownCardContainerStyles = {
      title: {
        root: {
          fontWeight: FontWeights.semibold
        }
      },
      contentContainer: { root: { width: '100%' } }
    };
    return (
      <Stack tokens={{ childrenGap: spacing.m }}>
        {title && (
          <Text styles={styles.title} variant="large">
            {title}
          </Text>
        )}
        {children && (
          <Stack.Item>
            <Stack
              horizontal={true}
              wrap={true}
              styles={styles.contentContainer}
              tokens={{ childrenGap: '14px' }}
            >
              {children}
            </Stack>
          </Stack.Item>
        )}
      </Stack>
    );
  };

export interface DrillDownCardProps<TData> {
  styles?: DrillDownCardStyles;
  type: DrilldownCardType;
  // Unique key to describe the drill down Card
  id: string;
  // The title describing the card that's being displayed
  title?: string | null | undefined;
  // Properties that should be passed to the Image.
  imageProps?: IImageProps;
  data: TData;
}
export interface DrillDownCardStyles {
  /**
   * Style for the root element.
   */
  root?: IStackStyles;

  /**
   * Style for the container that the link is rendered inside of
   */
  linkContainer?: IStackItemStyles;

  /**
   * Styles for the link itself
   */
  link?: CSSProperties;

  /**
   * Styles for the button itself
   */
  button?: IButtonStyles;
}

// Display a clickable card that represents a product category.
// Image on top with a title underneath.
// The width of the component will scale based on the imageProps passed to the component.
// export const DrillDownCard: React.FC<DrillDownCardProps> = (props) => {
export function DrillDownCard<TData extends Product | Category>(
  props: DrillDownCardProps<TData>
): React.ReactElement<DrillDownCardProps<TData>> {
  const { title, imageProps } = props;
  const theme = useTheme();
  const { palette, spacing, effects, semanticColors } = theme;

  const drillDownCardStyles: DrillDownCardStyles = {
    root: {
      root: {
        // We want the container to have the same width of the image
        width: 196,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4,
        cursor: 'pointer',

        backgroundColor: palette.white,
        transition: '0.3 all ',
        selectors: {
          '&:active': {
            boxShadow: effects.elevation4
          },
          '&:hover button': {
            color: palette.themeDark
          }
        }
      }
    },
    linkContainer: {
      root: {
        // We want the linkContainer to have the same width of the image

        width: '100%',
        textAlign: 'center',
        borderTop: `1px solid ${palette.neutralLight}`,
        paddingBottom: spacing.m,
        color: palette.accent,
        paddingTop: spacing.s1
      }
    }
  };

  return (
    <Stack styles={drillDownCardStyles.root} verticalFill>
      <Image
        width={194}
        height={145}
        src={imageProps?.src || ''}
        loading="lazy"
      />

      {title ? (
        <Stack.Item styles={drillDownCardStyles.linkContainer}>
          {title}
        </Stack.Item>
      ) : null}
    </Stack>
  );
}
