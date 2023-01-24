import { IntlShape } from 'react-intl';

import { SystemOfMeasurement } from '@services/facet-service/models/facet/facetUnitOfMeasurement';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { VariantFormatter } from '@services/i18n/formatters/entity-formatters/variantFormatter';
import { AttributeType, Option, Variant } from '@services/portal-api';
import { ENVIRONMENT_VARIABLES } from '@utilities/environmentVariables';

import {
  ProductConfigurationItem,
  ProductConfigurationItemOption
} from './productConfigurations.types';

export function mapOptionsToProductConfigurationItems(
  options: Option[],
  productNumber: string | undefined,
  getAttributeType: (code: string) => AttributeType | undefined,
  intl: IntlShape,
  systemOfMeasurement: SystemOfMeasurement,
  locale: string = ENVIRONMENT_VARIABLES.defaultLocale
): Array<ProductConfigurationItem | null> {
  const items: Array<ProductConfigurationItem | null> = options.map(option => {
    const activeVariant: Variant | undefined | null = option.variants?.find(
      variant => variant?.productNumber === productNumber
    );

    if (!activeVariant || !option.typeCode) {
      return null;
    }
    const attributeTypeFormatter: AttributeTypeFormatter =
      new AttributeTypeFormatter(
        getAttributeType(option.typeCode || ''),
        locale
      );
    const variantFormatter: VariantFormatter = new VariantFormatter(
      activeVariant,
      intl,
      systemOfMeasurement,
      locale
    );
    return {
      title: attributeTypeFormatter.formatName(),
      text: variantFormatter.formatDisplayValue(),
      options: mapVariantsToProductConfigurationItemOptions(
        option.variants || [],
        productNumber,
        intl,
        systemOfMeasurement,
        locale
      )
    };
  });
  return items;
}

function mapVariantsToProductConfigurationItemOptions(
  variants: Variant[],
  productNumber: string | undefined,
  intl: IntlShape,
  systemOfMeasurement: SystemOfMeasurement,
  locale: string = ENVIRONMENT_VARIABLES.defaultLocale
): ProductConfigurationItemOption[] {
  return variants
    .sort((a, b) => {
      if (a.sortIndex && b.sortIndex) {
        return a.sortIndex - b.sortIndex;
      }
      const variantAFormatter = new VariantFormatter(
        a,
        intl,
        systemOfMeasurement,
        locale
      );
      const variantBFormatter = new VariantFormatter(
        b,
        intl,
        systemOfMeasurement,
        locale
      );
      return (
        (a.sortIndex || 0) - (b.sortIndex || 0) ||
        variantAFormatter
          .formatDisplayValue()
          .localeCompare(variantBFormatter.formatDisplayValue(), locale, {
            sensitivity: 'base'
          })
      );
    })
    .map(variant => {
      const variantFormatter: VariantFormatter = new VariantFormatter(
        variant,
        intl,
        systemOfMeasurement,
        locale
      );
      const option: ProductConfigurationItemOption = {
        key: variant.productNumber || '',
        text: variantFormatter.formatDisplayValue(),
        selected: productNumber === variant.productNumber,
        href: variantFormatter.formatHref()
      };
      return option;
    });
}
