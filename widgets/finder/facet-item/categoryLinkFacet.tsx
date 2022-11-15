import { useContext, useMemo } from 'react';

import { useRouter } from 'next/router';
import { defineMessages, useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import { ITextStyles, Stack, Text, useTheme } from '@fluentui/react';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { messageIds } from '@services/i18n';
import { FacetOptionFormatter } from '@services/i18n/formatters/facetFormatter';
import { FacetedSearchFacetResult } from '@services/portal-api/faceted-search/types';
import { rem } from '@utilities/rem';

import {
  filterFacetOptionWithResults,
  getPredictedCountForOption
} from '../helper';
import { FacetContainer } from './facetContainer';

interface CategoryLinkFacetProps {
  facet: Facet;
  predictedResults: FacetedSearchFacetResult[] | undefined;
  categoryId: string | undefined;
}

interface CategoryLinkFacetStyles {
  resultLabel: ITextStyles;
}

const messages = defineMessages({
  title: {
    id: messageIds.finder.categoryFacet.title,
    defaultMessage: 'Category',
    description: 'Title for the category facet'
  }
});

export const CategoryLinkFacet: React.FC<CategoryLinkFacetProps> = ({
  facet,
  predictedResults,
  categoryId
}) => {
  const intl = useIntl();
  const { formatMessage, locale } = intl;
  const { palette } = useTheme();
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
  const { query, pathname } = useRouter();
  const visibleOptions: FacetOption[] = useMemo(() => {
    function getFilteredNestedCategoryOptions(
      options: FacetOption[],
      parentId: string | null | undefined
    ): FacetOption[] {
      // Filter the direct child options with actual predicted results
      const childOptionsWithResults = options
        .filter(option =>
          filterFacetOptionWithResults(option, predictedResults)
        )
        .filter(option => {
          if (parentId) {
            return option.parentId === parentId;
          }
          return !option.parentId;
        });

      // If there is not exactly one.
      // E.G: If there is only 1 direct child we will recursively check its child options
      // This way we can skip a category tier
      if (childOptionsWithResults.length !== 1) {
        return childOptionsWithResults;
      } else {
        const nestedChildOptions: FacetOption[] =
          getFilteredNestedCategoryOptions(
            options,
            childOptionsWithResults[0].valueId
          );
        return nestedChildOptions.length
          ? nestedChildOptions
          : childOptionsWithResults;
      }
    }
    return getFilteredNestedCategoryOptions(facet.options, categoryId);
  }, [categoryId, facet.options, predictedResults]);
  const styles: CategoryLinkFacetStyles = {
    resultLabel: {
      root: {
        color: palette.themeSecondary
      }
    }
  };
  if (visibleOptions.length > 1) {
    return (
      <FacetContainer facetTitle={formatMessage(messages.title)}>
        <Stack
          tokens={{
            childrenGap: rem(2)
          }}
        >
          {visibleOptions.map(option => {
            const facetOptionFormatter = new FacetOptionFormatter(
              option,
              getPredictedCountForOption(
                predictedResults || [],
                option.valueId
              ),
              intl,
              systemOfMeasurement,
              locale
            );

            return (
              <NextLink
                key={option.key}
                href={{
                  pathname,
                  query: {
                    ...query,
                    categorySlug: [option.configuration.seoPath as string]
                  }
                }}
              >
                <a>
                  <Stack.Item>
                    <Text variant="mediumPlus">
                      {facetOptionFormatter.formatDisplayValue()}
                    </Text>
                    <Text variant="mediumPlus" styles={styles.resultLabel}>
                      {facetOptionFormatter.formatPredictedResult()}
                    </Text>
                  </Stack.Item>
                </a>
              </NextLink>
            );
          })}
        </Stack>
      </FacetContainer>
    );
  }
  return null;
};
