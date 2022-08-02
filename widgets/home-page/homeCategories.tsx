import React, { useMemo } from 'react';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Stack } from '@fluentui/react';
import { Category } from '@services/portal-api';
import { mapCategoriesToHomeCategoryItems } from './homeCategoriesHelper';

interface IHomeCategoriesSectionProps {
  categories: Category[];
}

export interface HomeCategoryItem {
  id: string | undefined;
  href: string;
  name: string;
  description: string;
  children: HomeCategoryItem[];
}
export const HomeCategoriesSection: React.FC<IHomeCategoriesSectionProps> = ({
  categories
}) => {
  const { locale } = useIntl();
  const items: HomeCategoryItem[] = useMemo(() => {
    return mapCategoriesToHomeCategoryItems(categories, locale);
  }, [categories, locale]);
  return (
    <Stack>
      {items.map(item => {
        return (
          <Stack.Item key={item.id}>
            <Stack>
              <Stack.Item>
                <Link href={item.href}>
                  <a>
                    <h1>{item.name}</h1>
                    <h3>{item.description}</h3>
                  </a>
                </Link>
              </Stack.Item>
              <Stack.Item>
                {item.children?.map(childItem => {
                  return (
                    <Link key={childItem.id || ''} href={childItem.href}>
                      <a>{childItem.name}</a>
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
