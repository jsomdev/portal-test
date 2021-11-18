import {
  CommandBarButton,
  DirectionalHint,
  FontSizes,
  FontWeights,
  IButtonStyles,
  ICommandBarItemProps,
  PartialTheme,
} from '@fluentui/react';
import { MenuItem } from '@services/portal-api/models/MenuItem';
import { rem } from '@utilities/rem';

/**
 * Getter for the CommandBarItems that will be displayed in the MainHeader's CommandBar.
 * @param menuItems Array of MenuItems to create CommandBarItems for
 * @param onItemClick callback for when an item is clicked
 * @param theme Theme that is being used
 * @param buttonStyles  IButtonStyles that need to be applied to the CommandBarButtons
 * @param parentId  Guid of the parent menu item
 * @returns Array of CommandBarItems
 */
export function getMainCommandBarItems(
  menuItems: MenuItem[],
  onItemClick: (
    ev: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined,
    path: string
  ) => void,
  theme: PartialTheme,
  buttonStyles: IButtonStyles,
  parentId?: string | null | undefined
): ICommandBarItemProps[] {
  if (!menuItems) {
    return [];
  }
  const hasSubItems = (id: string | undefined) => {
    return !!menuItems.filter((child) => child.parentId === id).length;
  };

  return menuItems
    .filter((menuItem) => menuItem.parentId === parentId)
    .map((menuItem): ICommandBarItemProps => {
      return {
        key: menuItem.id || '',
        text: menuItem.url?.text?.en || '',
        // TODO: Add href
        href: 'TODO',
        onClick: (ev) => {
          if (menuItem.url?.value) {
            onItemClick(ev, menuItem.url?.value);
          }
        },
        commandBarButtonAs: (props) => (
          <CommandBarButton
            {...(props as unknown)}
            // Need to overwrite the menuProps here so that we can display a beak
            // (by fluentUI design, a commandbar does not show beaks)
            menuProps={{
              isBeakVisible: true,
              directionalHint: DirectionalHint.bottomCenter,
              directionalHintFixed: true,
              gapSpace: 0,
              calloutProps: {
                isBeakVisible: true,
                beakWidth: 12,
                gapSpace: -2,
                styles: {
                  beak: {
                    background: '#dde3e7',
                  },
                  root: {
                    marginTop: rem(-3),
                  },
                  calloutMain: {
                    borderRadius: 0,
                    '& .ms-ContextualMenu-list': {
                      position: 'relative',
                      background: 'linear-gradient(to bottom, #dde3e7 0%, #EEF1F4 10px)',
                      width: '240px',
                      padding: '10px 0 12px 0',
                      '& .ms-ContextualMenu-link:hover': {
                        background: theme?.palette?.themePrimary,
                      },
                      '& .ms-ContextualMenu-link:hover .ms-ContextualMenu-itemText': {
                        textDecoration: 'underline',
                        color: theme?.palette?.white,
                      },
                      '& .ms-ContextualMenu-link': {
                        background: '#EEF1F4',
                        padding: '10px 24px',
                        height: 'auto',

                        '& .ms-ContextualMenu-linkContent': {
                          lineHeight: 'normal',
                          whiteSpace: 'normal',
                        },
                        '& .ms-ContextualMenu-itemText': {
                          fontSize: FontSizes.medium,
                          fontWeight: FontWeights.semibold,
                          '@media(min-width: 1200px)': {
                            fontSize: FontSizes.mediumPlus,
                          },
                          whiteSpace: 'normal',
                          textOverflow: 'clip',
                          color: '#5E7C8E',
                          margin: rem(0),
                        },
                      },
                    },
                  },
                },
              },
              items: props.subMenuProps?.items || [],
            }}
            styles={buttonStyles}
            text={props.text}
          />
        ),

        // TODO: Implement full recursive behavior
        subMenuProps:
          parentId === null && hasSubItems(menuItem.id)
            ? {
                items: getMainCommandBarItems(menuItems, onItemClick, theme, buttonStyles, menuItem.id || null),
              }
            : undefined,
      };
    });
}
