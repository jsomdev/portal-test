import {
  IStackItemStyles,
  IStackStyles,
  ITextFieldStyles
} from '@fluentui/react';

export interface AddBulkFormStyles {
  lineContainer: IStackStyles;
  productNumberFieldWrapper: IStackItemStyles;
  quantityField: Partial<ITextFieldStyles>;
}
