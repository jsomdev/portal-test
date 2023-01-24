import { FooterData } from '@widgets/site-footer/footerData';

export type FooterColumnFields = {
  titleMessageId: string | null;
  items: FooterItem[];
};

export type FooterColumns = Record<keyof FooterData, FooterColumnFields>;

export type FooterItem = {
  labelMessageId: string;
  url: string;
};

export type SocialMediaLink = {
  alt: string;
  url: string;
  imageSrc: string;
};
