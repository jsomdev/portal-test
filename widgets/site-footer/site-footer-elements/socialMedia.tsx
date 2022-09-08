import { Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';
import Image from 'next/image';
import { CSSProperties, FC } from 'react';
import { SocialMediaLink } from '../siteFooter.types';

const socialMediaLinks: SocialMediaLink[] = [
  {
    alt: 'Youtube Icon Image',
    imageSrc: STATIC_IMAGES.footer.youtube,
    url: 'https://www.youtube.com/user/sprayingsystems'
  },
  {
    alt: 'Twitter Icon Image',
    imageSrc: STATIC_IMAGES.footer.twitter,
    url: 'https://twitter.com/spraynews'
  },
  {
    alt: 'LinkedIn Icon Image',
    imageSrc: STATIC_IMAGES.footer.linkedIn,
    url: 'https://www.linkedin.com/company/spraying-systems-co-'
  },
  {
    alt: 'Facebook Icon Image',
    imageSrc: STATIC_IMAGES.footer.facebook,
    url: 'https://www.facebook.com/SprayingSystemsCo/'
  },
  {
    alt: 'Instagram Icon Image',
    imageSrc: STATIC_IMAGES.footer.instagram,
    url: 'https://www.instagram.com/SprayingSystemsCo/'
  },
  {
    alt: 'Mail Icon Image',
    imageSrc: STATIC_IMAGES.footer.mail,
    url: 'mailto:info@spray.com?subject=More Information'
  }
];

export const SocialMedia: FC = () => {
  const imageStyle: CSSProperties = {
    cursor: 'pointer',
    //color: 'white',
    minWidth: 28,
    color: 'pink'
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 18 }}>
      {socialMediaLinks.map((link, i) => {
        return (
          <Stack key={`${link.url}_${i}`} styles={{ root: { minWidth: 24 } }}>
            <Image
              alt={link.alt}
              style={imageStyle}
              src={link.imageSrc}
              onClick={() => window.open(link.url)}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};
