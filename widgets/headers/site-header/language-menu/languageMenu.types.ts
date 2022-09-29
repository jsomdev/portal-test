import {
  IPivotStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';
import { Country, Language, Region } from '@services/i18n';

export interface LanguageMenuStyles {
  headerContainer: IStackStyles;
  headerText: ITextStyles;
  pivot: Partial<IPivotStyles>;
  contentContainer: IStackStyles;
  pivotContainer: IStackStyles;
  selectedRegion: ITextStyles;
  regionContainer: IStackItemStyles;
}

export interface LanguageWithPath extends Language {
  path: string;
  locale: string;
}

export interface CountryWithPaths extends Country {
  languages: LanguageWithPath[];
}

export interface RegionWithPaths extends Region {
  countries: CountryWithPaths[];
}

export interface LanguageMenuItemProps {
  country: CountryWithPaths;
}

export interface LanguageMenuItemStyles {
  seperator: ITextStyles;
  flagStackItem: IStackItemStyles;
  countryText: ITextStyles;
}
