import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useMultiMenu } from '@widgets/headers/site-header/multi-menu/multiMenu.helper';
import { MultiMenuConfiguration } from '@widgets/headers/site-header/multi-menu/multiMenu.types';

const testItem_2_1_1 = {
  id: 'test-item-2-1-1',
  text: 'Child 2-1-1',
  href: '/test-item-2-1-1',
  children: [
    {
      id: 'test-item-2-1-1-1',
      text: 'Child 2-1-1-1',
      href: '/test-item-2-1-1-1'
    },
    {
      id: 'test-item-2-1-1-2',
      text: 'Child 2-1-1-2',
      href: '/test-item-2-1-1-2'
    }
  ]
};

const menuConfiguration: MultiMenuConfiguration = {
  testMenu: {
    backButtonText: 'back 1',
    style: 'default',
    hideOtherMenusWhenActive: false,
    items: [
      {
        id: 'test-item-1',
        text: 'test item 1',
        href: '/test-item-1',
        children: [
          {
            id: 'test-item-1-1',
            text: 'Child 1-1',
            href: '/test-item-1-1'
          },
          { id: 'test-item-1-2', text: 'Child 1-2', href: '/test-item-1-2' }
        ]
      }
    ]
  },
  testMenu2: {
    backButtonText: 'back 2',
    style: 'plain',
    hideOtherMenusWhenActive: true,
    items: [
      {
        id: 'test-item-2-1',
        text: 'test item 2-1',
        href: '/test-item-2-1',
        children: [testItem_2_1_1]
      }
    ]
  }
};

describe('useMultiMenu', () => {
  it('should return the correct menu items when no item is selected', async () => {
    const { result } = renderHook(() => useMultiMenu(menuConfiguration));

    act(() => {
      result.current.setActiveMenuItemId(undefined);
    });

    expect(result.current.activeMenuItemId).toEqual(undefined);
    expect(result.current.activeMenuItem).toEqual(undefined);
    expect(result.current.menus).toEqual(menuConfiguration);

    expect(result.current.breadcrumbs).toHaveLength(0);
  });

  it('should return the correct menu items when nested item is selected', async () => {
    const { result } = renderHook(() => useMultiMenu(menuConfiguration));

    act(() => {
      result.current.setActiveMenuItemId('test-item-2-1-1');
    });

    expect(result.current.activeMenuItemId).toEqual(testItem_2_1_1.id);
    expect(result.current.activeMenuItem).toEqual(testItem_2_1_1);
    expect(result.current.activeMenu?.items).toEqual(testItem_2_1_1.children);

    expect(result.current.breadcrumbs).toHaveLength(1);
    expect(result.current.breadcrumbs[0].id).toEqual('test-item-2-1');
  });

  it('should return the correct menu items and breadcrumbs when 3 levels deep nested item is selected', async () => {
    const { result } = renderHook(() => useMultiMenu(menuConfiguration));

    act(() => {
      result.current.setActiveMenuItemId('test-item-2-1-1-2');
    });

    const item = testItem_2_1_1.children[1];
    expect(result.current.activeMenuItemId).toEqual(item.id);
    expect(result.current.activeMenuItem).toEqual(item);

    expect(result.current.breadcrumbs).toHaveLength(2);
    expect(result.current.breadcrumbs[0].id).toEqual('test-item-2-1');
    expect(result.current.breadcrumbs[1].id).toEqual('test-item-2-1-1');
  });
});
