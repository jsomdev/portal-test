import {
  IBreadcrumbItem,
  IBreadcrumbStyles,
  IStackStyles
} from '@fluentui/react';

export type MainBreadcrumbProps = {
  items: IBreadcrumbItem[];
  wrapInContainer?: boolean;
};

export type MainBreadcrumbStyles = {
  breadcrumb?: Partial<IBreadcrumbStyles>;
  root?: Partial<IStackStyles>;
};
