export interface ProductConfigurationItemOption {
  key: string;
  text: string;
  selected: boolean;
  href: string;
}
export interface ProductConfigurationItem {
  title: string;
  text: string;
  options: ProductConfigurationItemOption[];
}
