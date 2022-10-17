import { DefaultSpacing, FontSizes } from '@fluentui/react';
import { PartialTheme } from '@fluentui/theme';
import { rem } from '@utilities/rem';

export const appTheme: PartialTheme = {
  defaultFontStyle: { fontFamily: 'proxima-nova', fontWeight: 'regular' },

  palette: {
    themePrimary: '#0065a4',
    themeLighterAlt: '#f1f7fb',
    themeLighter: '#cae2f0',
    themeLight: '#9fc9e3',
    themeTertiary: '#509ac8',
    themeSecondary: '#1573ae',
    themeDarkAlt: '#005b93',
    themeDark: '#064770',
    themeDarker: '#00385b',
    neutralLighterAlt: '#FAFAFA',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#b4b4b4',
    neutralSecondary: '#9b9b9b',
    neutralPrimaryAlt: '#838383',
    neutralPrimary: '#212121',
    neutralDark: '#525252',
    black: '#222',
    white: '#ffffff',
    accent: '#0065a4',
    yellowDark: '#FEC857',
    green: '#12B83F',
    blueDark: '#33658A'
  },
  effects: {},
  fonts: {
    xSmall: {
      fontSize: rem(FontSizes.xSmall)
    },
    small: {
      fontSize: rem(FontSizes.small)
    },
    smallPlus: {
      fontSize: rem(FontSizes.smallPlus)
    },
    medium: {
      fontSize: rem(FontSizes.medium),
      color: '#222'
    },
    mediumPlus: {
      fontSize: rem(FontSizes.mediumPlus)
    },
    large: {
      fontSize: rem(FontSizes.large)
    },
    superLarge: {
      fontSize: rem(FontSizes.superLarge)
    },
    xLarge: {
      fontSize: rem(FontSizes.xLarge)
    },
    xLargePlus: {
      fontSize: rem(FontSizes.xLargePlus)
    },
    xxLarge: {
      fontSize: rem(FontSizes.xxLarge)
    },
    xxLargePlus: {
      fontSize: rem(FontSizes.xxLargePlus)
    },
    mega: {
      fontSize: rem(FontSizes.mega)
    }
  },
  spacing: {
    s1: rem(DefaultSpacing.s1),
    s2: rem(DefaultSpacing.s2),
    l1: rem(DefaultSpacing.l1),
    l2: rem(DefaultSpacing.l2),
    m: rem(DefaultSpacing.m)
  },
  semanticColors: {
    link: '#0065a4',
    linkHovered: '#0065a4',
    bodyBackground: 'transparent',
    cardStandoutBackground: '#075671',
    bodyStandoutBackground: '#242F37',
    bodySubtext: '#AEBDC6',
    variantBorder: '#e6e6e6'
  }
};
