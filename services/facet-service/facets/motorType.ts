import { Facet } from '../models/facet/facet';
import { FacetCategory } from '../models/facet/facetCategory';
import { FacetControlType } from '../models/facet/facetControlType';
import { FacetKey } from '../models/facet/facetKey';
import { FacetOption } from '../models/facet/facetOption';
import { FacetSelectType } from '../models/facet/facetSelectType';
import { defaultFacet } from './defaultFacet';
import { defaultFacetOption } from './defaultFacetOption';

export enum MotorTypeFacetOptionKey {
  Air_motor = 'Air_motor',
  Electric_motor = 'Electric_motor'
}

export const motorTypeFacetOptions: FacetOption<MotorTypeFacetOptionKey>[] = [
  {
    key: MotorTypeFacetOptionKey.Air_motor,
    ...defaultFacetOption,
    valueId: 'b9eefc31-e0dd-4f28-aa6d-20391b570266',
    value: 'Air_motor',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Air motor' }
        }
      ],
      sortIndex: 1
    }
  },
  {
    key: MotorTypeFacetOptionKey.Electric_motor,
    ...defaultFacetOption,
    valueId: 'f658b4a8-73a8-4507-b6ea-0c953001c6e2',
    value: 'Electric_motor',
    configuration: {
      displays: [
        {
          variation: 'Invariant',
          unitSymbol: '',
          value: { en: 'Electric motor' }
        }
      ],
      sortIndex: 2
    }
  }
];

export const motorTypeFacet: Facet<
  MotorTypeFacetOptionKey,
  FacetOption<MotorTypeFacetOptionKey>
> = {
  ...defaultFacet,
  key: FacetKey.MotorType,
  attributeTypeCode: 'MotorType',
  configuration: {
    category: FacetCategory.Main,
    controlType: FacetControlType.Checkbox,
    selectType: FacetSelectType.MultiSelect,
    isFacetingEnabled: true
  },
  options: motorTypeFacetOptions
};
