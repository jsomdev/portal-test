import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { mergeCss } from '@fluentui/merge-styles';
import { Stack, Text, useTheme } from '@fluentui/react';

import {
  LanguageMenuItemProps,
  LanguageMenuItemStyles
} from './languageMenu.types';
import { getCountryImage } from './languageMenuCountry.helper';

export const LanguageMenuItem: React.FC<LanguageMenuItemProps> = ({
  country,
  onLocaleSelected
}) => {
  const { spacing, palette } = useTheme();

  const styles: LanguageMenuItemStyles = {
    separator: {
      root: {
        paddingLeft: spacing.s2,
        color: palette.themePrimary
      }
    },
    flagStackItem: {
      root: { width: 20, height: 20 }
    },
    countryText: { root: { fontSize: 15, fontWeight: 500 } },
    link: {
      color: palette.blue,
      ':hover': {
        textDecoration: 'underline'
      }
    }
  };
  const image = getCountryImage(country.code);
  return (
    <Stack>
      <Stack.Item>
        <Stack
          horizontal
          tokens={{ childrenGap: spacing.s1 }}
          verticalAlign="center"
        >
          <Stack.Item styles={styles.flagStackItem}>
            {image && <Image src={image} layout="intrinsic" />}
          </Stack.Item>
          <Stack.Item>
            <Stack>
              <Stack.Item>
                <Text styles={styles.countryText}>{country.name}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack
          horizontal
          wrap
          tokens={{ childrenGap: spacing.s2, padding: '0 0 0 28px' }}
        >
          {country.languages.map((language, index) => {
            return (
              <Stack.Item key={`${country.name}-${language.name}`}>
                <Link href={language.path} locale={language.locale}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a
                    onClick={onLocaleSelected}
                    className={mergeCss(styles.link)}
                  >
                    {language.name}
                  </a>
                </Link>
                {index < country.languages.length - 1 ? (
                  <Text styles={styles.separator}>|</Text>
                ) : null}
              </Stack.Item>
            );
          })}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
