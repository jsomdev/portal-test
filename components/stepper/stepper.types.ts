import {
  ILabelStyles,
  IStackItemStyles,
  IStackStyles,
  ITextStyles
} from '@fluentui/react';

export interface StepStyles {
  stepContainer: (isActive: boolean, isCompleted: boolean) => IStackStyles;
  labelContainer: IStackStyles;
  stepText: ITextStyles;
  stepLine: IStackItemStyles;
  labelText: (isActive: boolean, isCompleted: boolean) => ILabelStyles;
}

export interface StepsStyles {
  root: IStackStyles;
  guideLine: IStackItemStyles;
  activeLine: IStackItemStyles;
  label: IStackItemStyles;
}
