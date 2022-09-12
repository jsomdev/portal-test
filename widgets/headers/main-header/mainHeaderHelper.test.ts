import { MenuItem } from '@services/portal-api';
import { createIntl } from 'react-intl';
import { mapMenuItemsToMenuItemProps } from './mainHeader.helper';

describe('mapMenuItemsToMenuItemProps', () => {
  const intl_nl = createIntl({
    locale: 'nl-BE',
    defaultLocale: 'en-US'
  });
  test('Menu items are mapped correctly', () => {
    const menuItems: MenuItem[] = [
      {
        audience: 'NorthAmerica, Europe',
        id: 'd818fcba-f181-49a8-a613-2b009c0e7883',
        parentId: null,
        slug: {
          en: 'tank-cleaning-nozzles',
          nl: 'tank-reinigings-nozzles'
        },
        url: {
          text: { en: 'Tank Cleaning Nozzles' }
        }
      },
      {
        audience: 'NorthAmerica, Europe',
        id: 'd818fcba-f181-49a8-a613-2b009c0e7884',
        parentId: 'd818fcba-f181-49a8-a613-2b009c0e7883',
        slug: {
          en: 'tank-cleaning-nozzles',
          nl: 'tank-reinigings-nozzles'
        },
        url: {
          text: { en: 'Tank Cleaning Nozzles' }
        }
      }
    ];

    //Test the slug translations
    expect(
      mapMenuItemsToMenuItemProps(menuItems, 'expanded', intl_nl)[0].href
    ).toEqual('/categories/tank-reinigings-nozzles');
    //Test child / parent mapping
    expect(
      mapMenuItemsToMenuItemProps(menuItems, 'expanded', intl_nl).length
    ).toEqual(1);
  });
});
