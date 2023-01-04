import React from 'react';

import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';
import { UrlObject } from 'url';

export const NextLink: React.FC<
  Omit<LinkProps, 'href'> & { href: string | null | undefined | UrlObject }
> = ({ children, ...props }) => {
  if (props.href) {
    const linkProps = props as LinkProps;
    return (
      <Link {...linkProps} prefetch={!!props.prefetch}>
        {children}
      </Link>
    );
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
