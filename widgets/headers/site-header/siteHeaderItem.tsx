import { IButtonStyles } from '@fluentui/react';
import { rem } from '@utilities/rem';
import { MenuItemProps } from '../main-header/mainHeader.helper';
import { SiteHeaderButton } from './siteHeaderButton';

export interface SiteMenuItemProps {
  item: MenuItemProps;
}

interface SiteHeaderItemStyles {
  button: Partial<IButtonStyles>;
}

export const SiteHeaderItem: React.FC<SiteMenuItemProps> = ({ item }) => {
  const styles: SiteHeaderItemStyles = {
    button: {
      label: {
        fontSize: rem(14),
        fontWeight: 500
      }
    }
  };
  return (
    <li className="horizontal">
      <SiteHeaderButton
        type="actionButton"
        id={`site-header-item-${item.id}`}
        text={item.text}
        href={item.href}
        styles={styles.button}
      />
    </li>
  );
};
