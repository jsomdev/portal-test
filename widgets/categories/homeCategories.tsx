import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import {
  DrillDownCard,
  DrillDownCardProps,
  DrillDownCardsContainer
} from '@components/cards/drilldownCards';
import { mapCategoryToDrilldownCardProps } from '@components/cards/drilldownCards.helper';
import { Stack, useTheme } from '@fluentui/react';
import { formatMultilingualString } from '@services/i18n/helper';
import { Category } from '@services/portal-api';
import { formatCategoryHref } from '@utilities/formatHref';
import { PagesHeader } from '@widgets/headers/pageHeader';

interface IHomeCategoriesSectionProps {
  categories: Category[];
}
export const HomeCategoriesSection: React.FC<IHomeCategoriesSectionProps> = ({
  categories
}) => {
  const { locale } = useIntl();
  const { push } = useRouter();
  const theme = useTheme();
  return (
    <Stack>
      {categories.map((category, index) => {
        return (
          <Stack.Item key={category.id}>
            <Stack>
              <Stack.Item>
                <Link href={formatCategoryHref(category, false)}>
                  <a>
                    <PagesHeader
                      title={formatMultilingualString(category.name, locale)}
                      description={formatMultilingualString(
                        category.description,
                        locale
                      )}
                    />
                  </a>
                </Link>
              </Stack.Item>
              <Stack.Item>
                <DrillDownCardsContainer>
                  {category.children?.map(category => {
                    const drilldownCardProps: DrillDownCardProps<Category> =
                      mapCategoryToDrilldownCardProps(
                        category,
                        path => push(path?.toString() || ''),
                        theme
                      );
                    return (
                      <Link
                        key={category.id || ''}
                        href={formatCategoryHref(category, false)}
                      >
                        <a>
                          <DrillDownCard
                            key={drilldownCardProps.id}
                            {...drilldownCardProps}
                          />
                        </a>
                      </Link>
                    );
                  })}
                </DrillDownCardsContainer>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        );
      })}
    </Stack>
  );
};
