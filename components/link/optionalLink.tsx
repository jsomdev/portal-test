import React from 'react';

import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';

export const OptionalLink: React.FC<
  Omit<LinkProps, 'href'> & { href: string | null | undefined }
> = ({ children, ...props }) => {
  if (props.href) {
    const linkProps = props as LinkProps;
    return <Link {...linkProps}>{children}</Link>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
