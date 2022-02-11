import React from 'react';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { formatMultilingualString } from '@services/i18n/helper';
import { Category } from '@services/portal-api';
import { formatCategoryHref } from '@utilities/formatHref';

interface IHomeCategoriesSectionProps {
  categories: Category[];
}
export const HomeCategoriesSection: React.FC<IHomeCategoriesSectionProps> = ({
  categories
}) => {
  const { locale } = useIntl();
  return (
    <Stack>
      {categories.map(category => {
        return (
          <Stack.Item key={category.id}>
            <Stack>
              <Stack.Item>
                <Link href={formatCategoryHref(category, false)}>
                  <a>
                    <h1>{formatMultilingualString(category.name, locale)}</h1>
                    <h3>
                      {formatMultilingualString(category.description, locale)}
                    </h3>
                  </a>
                </Link>
              </Stack.Item>
              <Stack.Item>
                {category.children?.map(category => {
                  return (
                    <Link
                      key={category.id || ''}
                      href={formatCategoryHref(category, false)}
                    >
                      <a>{category.name?.en || ''}</a>
                    </Link>
                  );
                })}
              </Stack.Item>
            </Stack>
          </Stack.Item>
        );
      })}
    </Stack>
  );
};
