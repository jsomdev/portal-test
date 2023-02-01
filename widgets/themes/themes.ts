import { DefaultSpacing, FontSizes, IButtonStyles } from '@fluentui/react';
import { PartialTheme } from '@fluentui/theme';
import { rem } from '@utilities/rem';

const defaultButtonStyles: IButtonStyles = {
  root: {
    height: 'auto',
    padding: `${rem(10)} ${rem(16)}`,
    wordBreak: 'break-word'
  }
};

export const appTheme: PartialTheme = {
  defaultFontStyle: { fontFamily: 'proxima-nova', fontWeight: 'regular' },
  components: {
    PrimaryButton: {
      styles: defaultButtonStyles
    },
    DefaultButton: {
      styles: defaultButtonStyles
    }
  },
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
      color: '#222',
      lineHeight: '1.25em'
    },
    mediumPlus: {
      fontSize: rem(FontSizes.mediumPlus),
      lineHeight: '1.25em'
    },
    large: {
      fontSize: rem(FontSizes.large),
      lineHeight: '1.25em'
    },
    superLarge: {
      fontSize: rem(FontSizes.superLarge),
      lineHeight: '1.25em'
    },
    xLarge: {
      fontSize: rem(FontSizes.xLarge),
      lineHeight: '1.25em'
    },
    xLargePlus: {
      fontSize: rem(FontSizes.xLargePlus),
      lineHeight: '1.25em'
    },
    xxLarge: {
      fontSize: rem(FontSizes.xxLarge),
      lineHeight: '1.25em'
    },
    xxLargePlus: {
      fontSize: rem(FontSizes.xxLargePlus),
      lineHeight: '1.25em'
    },
    mega: {
      fontSize: rem(FontSizes.mega),
      lineHeight: '1.25em'
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
