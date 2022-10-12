import React from 'react';

import {
  IIconStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles,
  IToggleStyles
} from '@fluentui/react';
import { DisplayValueType } from '@services/i18n/formatters/entity-formatters/displayFormatter';
import { Attribute } from '@services/portal-api';

export interface ProductSpecificationsProps {
  allSpecifications: Attribute[];
}

export interface ProductSpecificationsListItemProps {
  label: string;
  text: string;
  type: DisplayValueType;
  // We don't know the value of an attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onClick: () => void;
  onRenderContent?: () => React.ReactNode;
  index: number;
  tooltipContent?: string | JSX.Element | JSX.Element[] | undefined;
  hideInfoIcon?: boolean;
}
export type ProductSpecificationsListProps = ProductSpecificationsGroup;
export interface ProductSpecificationsGroup {
  id: string;
  name: string;
  sortIndex: number;
  description: string;
  items: ProductSpecificationsItem[];
}
export interface ProductSpecificationsListStyles {
  title: ITextStyles;
  root: IStackStyles;
}

export interface ProductSpecificationsListItemStyles {
  infoIcon: IIconStyles;
  root: (index: number) => IStackStyles;
  title: ITextStyles;
  textWrapper: IStackItemStyles;
}
export interface ProductSpecificationsItem {
  key: string;
  name: string;
  description: string;
  sortIndex: number;
  type: DisplayValueType;
  // We don't know the value of an attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  text: string;
  alternativeText: string;
  attribute?: Attribute;
  options?: string[];
  isPublic?: boolean;
}

export interface ProductSpecificationStyles {
  toggleWrapper: Partial<IToggleStyles>;
}
