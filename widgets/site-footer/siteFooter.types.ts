import { IStackItemStyles, IStackStyles, ITextStyles } from '@fluentui/react';

export type SiteFooterStyles = {
  footer: IStackStyles;
  footerContainer: IStackStyles;
  buildContainer: IStackStyles;
  footerInfo: IStackStyles;
  footerMenu: IStackStyles;
  footerMenuItem: IStackItemStyles;
  text: ITextStyles;
};

export type FooterItem = {
  text: string;
  url: string;
};

export type SocialMediaLink = {
  alt: string;
  url: string;
  imageSrc: string;
};
