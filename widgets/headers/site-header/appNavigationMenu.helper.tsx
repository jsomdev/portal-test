import { MenuItemProps } from '@widgets/headers/main-header/mainHeader.helper';
import { RegionWithPaths } from '@widgets/headers/site-header/language-menu/languageMenu.types';
import { getCountryImage } from '@widgets/headers/site-header/language-menu/languageMenuCountry.helper';

export const mapRegionsToMenuItems = (
  regions: RegionWithPaths[],
  onDismiss: () => void
): MenuItemProps[] => {
  return regions.map((region: RegionWithPaths) => ({
    href: undefined,
    text: region.name,
    id: region.name,
    parentId: undefined,
    children: region.countries.map(country => ({
      href: undefined,
      text: country.name,
      id: country.code,
      image: getCountryImage(country.code),
      children: country.languages.map(language => ({
        href: language.path,
        locale: language.locale,
        text: language.name,
        id: language.locale,
        onClick: onDismiss
      }))
    }))
  }));
};
