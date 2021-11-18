import { PartialTheme } from '@fluentui/theme';

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
    neutralLighterAlt: '#EEF1F4',
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
    blueDark: '#33658A',
  },
  effects: {},
  fonts: {
    medium: {
      color: 'red',
    },
  },
  semanticColors: {
    link: '#0065a4',
    linkHovered: '#0065a4',
    cardStandoutBackground: '#075671',
    bodyStandoutBackground: '#242F37',
    bodySubtext: '#AEBDC6',
    variantBorder: '#e6e6e6',
  },
};
