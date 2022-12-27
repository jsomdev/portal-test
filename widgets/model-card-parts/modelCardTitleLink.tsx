import React from 'react';

import { NextLink } from '@components/link/nextLink';
import { mergeCss } from '@fluentui/merge-styles';
import { FontWeights, IFontStyles, Text, useTheme } from '@fluentui/react';
import { ModelCardViewModel } from '@widgets/model-card-parts/modelCardViewModel';

type ModelCardTitleLinkSize = 'small' | 'default';

type ModelCardTitleLinkProps = Pick<
  ModelCardViewModel,
  'url' | 'number' | 'name'
> & {
  size?: ModelCardTitleLinkSize;
};

function getTitleVariant(size: ModelCardTitleLinkSize): keyof IFontStyles {
  if (size === 'small') {
    return 'mediumPlus';
  }
  return 'large';
}

function getDescriptionVariant(
  size: ModelCardTitleLinkSize
): keyof IFontStyles {
  if (size === 'small') {
    return 'smallPlus';
  }
  return 'medium';
}

export const ModelCardTitleLink: React.FC<ModelCardTitleLinkProps> = ({
  url,
  number,
  name,
  size = 'default'
}) => {
  const { palette } = useTheme();
  const styles = {
    title: {
      root: {
        display: 'block',
        color: palette.themeDarker,
        fontWeight: FontWeights.semibold
      }
    },
    description: {
      root: {
        color: palette.neutralSecondary,
        display: 'block'
      }
    },
    link: {
      root: url
        ? {
            '&:hover > *': {
              color: palette.accent
            }
          }
        : {}
    }
  };

  return (
    <NextLink href={url}>
      <a className={mergeCss(styles.link)}>
        <Text variant={getTitleVariant(size)} styles={styles.title}>
          {number}
        </Text>
        <Text variant={getDescriptionVariant(size)} styles={styles.description}>
          {name}
        </Text>
      </a>
    </NextLink>
  );
};
