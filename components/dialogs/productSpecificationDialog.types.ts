import { IDialogProps, IDialogStyles } from '@fluentui/react';

export interface ProductSpecificationDialogProps {
  dialogProps: IDialogProps;
  attributeTypeCode?: string | null;
}

export interface ProductSpecificationDialogStyles {
  dialog: Partial<IDialogStyles>;
}
