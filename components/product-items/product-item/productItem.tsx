//TODO remove this and create specific CartItem Component: 14866 https://dev.azure.com/itssco/SSCo/_workitems/edit/14866
import React, { FC, ReactNode, useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { ProductKeySpecificationsButton } from '@components/buttons/productSpecificationButton';
import { ProductSpecificationDialog } from '@components/dialogs/productSpecificationDialog';
import { ProductSpecificationsItem } from '@components/product-items/productSpecifications.types';
import {
  FontWeights,
  Stack,
  Text,
  VerticalDivider,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { ProductFormatter } from '@services/i18n/formatters/entity-formatters/productFormatter';
import { Attribute } from '@services/portal-api';
import { formatProductDisplayValue, formatText } from '@utilities/formatText';

import { ProductItemBase } from '../product-item-base/productItemBase';
import { ProductItemProps, ProductItemStyles } from './productItem.types';
import { getProductKeySpecifications } from './productItemHelper';

export const ProductItem: FC<ProductItemProps> = ({
  productId,
  product,
  description,
  children,
  title,
  imageUrl,
  imageWidth = 152,
  imageHeight = 152,
  productAttributes = [],
  label,
  horizontal = false,
  styles: customStyles,
  onRenderKeySpecifications,
  onRenderProductPricing,
  onRenderBody
}) => {
  const { locale } = useRouter();
  const productFormatter = new ProductFormatter(product, locale);
  const { spacing, palette, fonts, semanticColors, effects } = useTheme();
  const [selectedSpecification, setSelectedSpecification] = useState<
    ProductSpecificationsItem | undefined
  >(undefined);
  const { getAttributeType } = useGlobalData();
  const { systemOfMeasurement } = React.useContext(SystemOfMeasurementContext);
  //renderKeySpecifications is a render method for the key specifications in a list, grid or table item.
  //Any custom render method passed to onRenderKeySpecifications prop will override this default method.
  //This method accepts an array of Attribute
  const renderKeySpecifications = (attributes: Attribute[]): ReactNode => {
    const productSpecificationItems: ProductSpecificationsItem[] =
      getProductKeySpecifications(
        attributes || [],
        getAttributeType,
        systemOfMeasurement
      );
    if (onRenderKeySpecifications) {
      return onRenderKeySpecifications(
        productSpecificationItems,
        setSelectedSpecification
      );
    }

    return (
      <Stack horizontal wrap>
        {productSpecificationItems.map((specification, index) => {
          return (
            <Stack
              horizontal
              wrap
              verticalAlign="stretch"
              key={specification.key}
            >
              <ProductKeySpecificationsButton
                onClick={() => setSelectedSpecification(specification)}
                text={
                  horizontal
                    ? specification.text
                    : formatText(specification.text, 16, '...')
                }
                tooltipValue={specification.alternativeText}
              />
              {index < productSpecificationItems.length - 1 && (
                <Stack tokens={{ padding: `0 ${spacing.s1}` }}>
                  <VerticalDivider />
                </Stack>
              )}
            </Stack>
          );
        })}
      </Stack>
    );
  };
  const styles: ProductItemStyles = {
    root: {
      root: {
        backgroundColor: palette.white,
        position: 'relative',
        marginTop: spacing.s1,
        height: '100%',
        marginBottom: spacing.s1,
        border: `1px solid ${semanticColors.variantBorder}`,
        borderRadius: effects.roundedCorner4
      }
    },
    title: {
      root: {
        fontWeight: FontWeights.semibold,
        color: palette.neutralPrimary,
        cursor: (!productId && 'default') || 'pointer',
        wordBreak: 'break-word',
        '&:hover': {
          color: (!productId && palette.neutralPrimary) || undefined
        }
      }
    },
    leftBookmarkWrapper: {
      root: {
        position: 'absolute',
        left: spacing.s1,
        top: spacing.s1,
        height: spacing.l1
      }
    },
    contentWrapper:
      (horizontal && {
        root: { flex: 1, minWidth: 192 }
      }) ||
      undefined,
    leftLabelWrapper: {
      root: {
        position: 'absolute',
        left: spacing.s1,
        top: imageHeight * 0.75,
        height: spacing.l1
      }
    },
    attributeText: {
      root: {
        ...fonts.smallPlus,
        lineHeight: '120%',
        borderBottom: `1px dashed ${palette.neutralSecondary}`,
        paddingBottom: '2px',
        color: palette.neutralSecondary,
        cursor: 'pointer',
        '&:hover': {
          borderBottom: `1px solid ${palette.neutralSecondary}`
        }
      }
    },
    description: {
      root: {
        '&:hover': {
          color: (!productId && palette.neutralPrimary) || undefined
        }
      }
    }
  };
  const mergedRootStyles = mergeStyleSets(styles.root, customStyles?.root);

  const mergedTitleStyles = mergeStyleSets(styles.title, customStyles?.title);

  const mergedDescriptionStyles = mergeStyleSets(
    styles.description,
    customStyles?.description
  );

  const mergedLeftLabelWrapper = mergeStyleSets(
    styles.leftLabelWrapper,
    customStyles?.leftLabelWrapper
  );

  const productUrl = productFormatter.formatUrl();
  return (
    <React.Fragment>
      <ProductSpecificationDialog
        dialogProps={{
          onDismiss: () => setSelectedSpecification(undefined),
          hidden: !selectedSpecification
        }}
        attributeTypeCode={selectedSpecification?.attribute?.typeCode}
      />
      <Stack
        horizontal={horizontal}
        wrap={horizontal}
        verticalAlign={horizontal ? 'stretch' : 'start'}
        styles={mergedRootStyles}
      >
        <ProductItemBase
          slug={product.slug}
          productId={productId}
          imageUrl={imageUrl}
          imageAlt={formatProductDisplayValue(product)}
          width={imageWidth}
          height={imageHeight}
        />

        <Stack
          tokens={{
            padding: `${spacing.s2} ${spacing.s1}`,
            childrenGap: `${spacing.s2} 0`
          }}
          grow
          styles={styles.contentWrapper}
        >
          {onRenderBody ? (
            onRenderBody(
              {
                variant: 'large',
                styles: mergedTitleStyles,
                children: title
              },
              { children: description }
            )
          ) : (
            <>
              {productUrl && (
                <Link href={productUrl}>
                  <a>
                    <Stack>
                      <Stack.Item>
                        <Text variant="large" styles={mergedTitleStyles}>
                          {title}
                        </Text>
                      </Stack.Item>
                      <Stack.Item>
                        <Text styles={mergedDescriptionStyles}>
                          {description}
                        </Text>
                      </Stack.Item>
                    </Stack>
                  </a>
                </Link>
              )}
              <Stack.Item>
                {renderKeySpecifications(productAttributes)}
              </Stack.Item>
            </>
          )}
        </Stack>
        {onRenderProductPricing && onRenderProductPricing()}
        {children}
      </Stack>
    </React.Fragment>
  );
};
