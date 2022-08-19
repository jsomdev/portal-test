import { IButtonStyles } from '@fluentui/react';
import { rem } from '@utilities/rem';
import { SiteHeaderButton } from './siteHeaderButton';

export interface SiteHeaderItemProps {
  text: string;
  href: string;
}

interface SiteHeaderItemStyles {
  button: Partial<IButtonStyles>;
}

export const SiteHeaderItem: React.FC<SiteHeaderItemProps> = ({
  text,
  href
}) => {
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
        text={text}
        href={href}
        styles={styles.button}
      />
    </li>
  );
};
