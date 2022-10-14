import { createIntl } from 'react-intl';

import { MenuItem } from '@services/portal-api';
import { mapMenuItemsToMenuItemViewModel } from '@widgets/headers/main-header/mainHeader.helper';

const menuItems: MenuItem[] = [
  {
    id: 'fcc3da8d-166b-486e-8297-d05f04a885a0',
    parentId: null,
    url: {
      value:
        '/categories/hydraulic-nozzles/7250A6CF-5474-4F4C-8678-9FAFAAEA7619/finder',
      text: {
        en: 'Hydraulic Nozzles'
      }
    }
  },
  {
    id: 'ef14cd1a-9fb1-461c-bd08-b89e406a1a09',
    parentId: 'fcc3da8d-166b-486e-8297-d05f04a885a0',
    url: {
      value:
        '/categories/full-cone-nozzles/e41acecc-5491-4fa1-ae55-1bf880305962/finder',
      text: {
        en: 'Full Cone Nozzles'
      }
    }
  },
  {
    id: '5f1b2a3d-4167-4407-8a33-d4964a7e4ea9',
    parentId: 'ef14cd1a-9fb1-461c-bd08-b89e406a1a09',
    url: {
      value:
        '/categories/standard-full-cone-nozzles/2498dfc7-3295-403b-97fa-28a19f748306/finder',
      text: {
        en: 'Standard Full Cone Nozzles'
      }
    }
  },
  {
    id: '54209909-672e-419f-a782-91976acdc899',
    parentId: 'ef14cd1a-9fb1-461c-bd08-b89e406a1a09',
    url: {
      value:
        '/categories/wide-angle-full-cone-nozzles/c67479be-9af0-434a-97c2-da8c26357b7f/finder',
      text: {
        en: 'Wide Angle Full Cone Nozzles'
      }
    }
  }
];

const intl = createIntl({
  locale: 'en-US',
  defaultLocale: 'en-US',
  messages: {}
});

describe('mapMenuItemsToMenuItemViewModel', () => {
  const defaultMenuItems = mapMenuItemsToMenuItemViewModel(
    menuItems,
    'default',
    intl,
    null
  );
  const expandedMenuItems = mapMenuItemsToMenuItemViewModel(
    menuItems,
    'expanded',
    intl,
    null
  );

  test('Menu items with children have an undefined value for their href property', () => {
    expect(
      expandedMenuItems.find(item => {
        item.id === 'fcc3da8d-166b-486e-8297-d05f04a885a0';
      })?.href
    ).toEqual(undefined);
  });

  test('Menu item href should not include the menu item id', () => {
    const testId: string = '54209909-672e-419f-a782-91976acdc899';
    expect(
      defaultMenuItems
        .find(item => {
          item.id === testId;
        })
        ?.href?.includes(testId)
    ).toBeFalsy();
  });

  test('The id of the first child of a children array should be the parent item with the same id', () => {
    const parent = expandedMenuItems[0];
    const firstChild = parent?.children?.[0];
    expect(parent.id).toEqual(firstChild?.id);
  });
});
