import React from 'react';

import Image from 'next/image';

import { Link, Stack, Text, useTheme } from '@fluentui/react';

import {
  LanguageMenuItemProps,
  LanguageMenuItemStyles
} from './languageMenu.types';
import { getCountryImage } from './languageMenuCountry.helper';

export const LanguageMenuItem: React.FC<LanguageMenuItemProps> = ({
  country
}) => {
  const { spacing, palette } = useTheme();

  const styles: LanguageMenuItemStyles = {
    seperator: {
      root: {
        paddingLeft: spacing.s2,
        color: palette.themePrimary
      }
    },
    flagStackItem: {
      root: { width: 20, height: 20 }
    },
    countryText: { root: { fontSize: 15, fontWeight: 500 } }
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
                <Link href={language.path}>{language.name}</Link>
                {index < country.languages.length - 1 ? (
                  <Text styles={styles.seperator}>|</Text>
                ) : null}
              </Stack.Item>
            );
          })}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
