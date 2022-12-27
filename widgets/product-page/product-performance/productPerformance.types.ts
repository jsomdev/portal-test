import { IStackItemStyles } from '@fluentui/react';
import { Attribute } from '@services/portal-api';

export interface ProductPerformanceStyles {
  container: IStackItemStyles;
}

export interface ProductPerformanceProps {
  flowRateAttributes: Attribute[];
  sprayAngleAttributes: Attribute[];
  airFlowRateAttributes: Attribute[];
}
