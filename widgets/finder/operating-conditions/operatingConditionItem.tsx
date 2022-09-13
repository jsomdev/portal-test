import { useContext, useEffect, useState } from 'react';

import {
  FontWeights,
  IButtonStyles,
  IconButton,
  ISliderStyles,
  IStackStyles,
  ITextFieldStyles,
  ITextStyles,
  Slider,
  Stack,
  Text,
  TextField,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { RangeFacetMatchType } from '@services/facet-service/facets/range-facets/rangeFacetHelper';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { Range } from '@services/facet-service/models/facet/facetResult';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { rem } from '@utilities/rem';

import { LiquidTypeFilter } from './liquidTypeFilter';

export interface OperatingConditionItemProps {
  operatingCondition: Facet;
  highlightValue?: boolean;
  hidden?: boolean;
  onChange: (facet: Facet) => void;
  onEnterPressed: () => void;
  onShowInfo: () => void;
  horizontal?: boolean;
}

interface OperatingConditionItemStyles {
  root: IStackStyles;
  labelContainer: IStackStyles;
  infoIcon: IButtonStyles;
  label: ITextStyles;
  textField: Partial<ITextFieldStyles>;
  slider: Partial<ISliderStyles>;
}

export const OperatingConditionItem: React.FC<OperatingConditionItemProps> = ({
  operatingCondition,
  horizontal,
  hidden,
  onChange,
  onShowInfo,
  onEnterPressed
}) => {
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
  const { spacing, palette, effects } = useTheme();
  const {
    getOperatingConditionMatchType,
    getOperatingConditionUnit,
    getOperatingConditionValue
  } = useFinder();
  const [highlightValue, setHighlightValue] = useState<boolean>(false);

  function onUpdateValue(
    optionKey: RangeFacetOptionKey,
    newValue: string | null | undefined
  ) {
    if (newValue === undefined) {
      newValue = null;
    }
    const currentOptions = operatingCondition.options.slice();
    const newOptions: FacetOption[] = currentOptions.map(
      (option: FacetOption) => {
        if (option.key === optionKey) {
          return {
            ...option,
            value: newValue,
            isActive: true
          } as FacetOption;
        }
        if (option.key === RangeFacetOptionKey.Unit) {
          return {
            ...option,
            value: getOperatingConditionUnit(
              operatingCondition,
              systemOfMeasurement
            ),
            isActive: !!getOperatingConditionUnit(
              operatingCondition,
              systemOfMeasurement
            )
          } as FacetOption;
        }
        return { ...option };
      }
    );
    const newFacet = {
      ...operatingCondition,
      options: newOptions
    };
    onChange(newFacet);
  }
  useEffect(() => {
    if (highlightValue) {
      setTimeout(() => {
        setHighlightValue(false);
      }, 2000);
    }
  }, [highlightValue]);

  const styles: OperatingConditionItemStyles = {
    textField: {
      root: {},
      prefix: {
        color: highlightValue ? palette.themePrimary : palette.neutralSecondary
      },
      suffix: {
        color: highlightValue ? palette.themePrimary : palette.neutralSecondary
      },
      fieldGroup: {
        width: 160,
        borderRadius: effects.roundedCorner2,

        borderColor: palette.neutralSecondary
      },
      field: {
        fontSize: rem('14px')
      }
    },
    root: {
      root: {
        display: hidden ? 'none' : 'initial',
        width: '100%'
      }
    },
    labelContainer: {
      root: {
        minHeight: 32
      }
    },

    label: {
      root: {
        width: 112,
        marginLeft: spacing.s2,
        marginRight: spacing.s2,
        fontWeight: FontWeights.semibold
      }
    },
    slider: {
      root: { flex: 1 },
      activeSection: {
        background: highlightValue
          ? palette.themePrimary
          : palette.neutralSecondary
      },
      valueLabel: {
        fontWeight: highlightValue ? FontWeights.semibold : FontWeights.regular,
        color: highlightValue ? palette.themePrimary : palette.black,
        width: 30
      }
    },
    infoIcon: {
      root: { padding: 0, width: 16 },
      rootHovered: { background: 'transparent' },
      icon: {
        color: palette.accent
      }
    }
  };

  function renderInput(): JSX.Element | null {
    if (operatingCondition.key === FacetKey.LiquidSpecificGravity) {
      return (
        <Stack
          horizontal
          styles={{
            root: {
              width: '100%'
            }
          }}
          tokens={{
            childrenGap: rem(spacing.s2),
            padding: `${rem(spacing.s2)} 0 ${rem(spacing.s2)} ${rem(
              spacing.s1
            )}`
          }}
        >
          {operatingCondition.key === FacetKey.LiquidSpecificGravity && (
            <LiquidTypeFilter
              operatingCondition={operatingCondition}
              onUpdateValue={(optionKey, newValue) => {
                onUpdateValue(optionKey, newValue);
                setHighlightValue(true);
              }}
            />
          )}
          <Slider
            showValue
            min={0.5}
            styles={styles.slider}
            onChange={value => {
              onUpdateValue(RangeFacetOptionKey.Exact, value.toString());
            }}
            max={3}
            step={0.1}
            valueFormat={value =>
              `${value} ${
                getOperatingConditionUnit(
                  operatingCondition,
                  systemOfMeasurement
                )?.symbol
              }`
            }
            value={Number(getOperatingConditionValue(operatingCondition))}
          />
        </Stack>
      );
    }
    switch (getOperatingConditionMatchType(operatingCondition)) {
      case RangeFacetMatchType.Exact:
        return (
          <TextField
            prefix={'='}
            suffix={
              getOperatingConditionUnit(operatingCondition, systemOfMeasurement)
                ?.symbol
            }
            styles={styles.textField}
            placeholder={''}
            type="number"
            step="any"
            onKeyDown={ev => {
              if (ev.key === 'Enter') {
                onEnterPressed();
              }
            }}
            onChange={(ev, newValue) => {
              onUpdateValue(RangeFacetOptionKey.Exact, newValue);
            }}
            value={
              getOperatingConditionValue(operatingCondition)?.toString() || ''
            }
          />
        );
      case RangeFacetMatchType.Nearby:
        return (
          <TextField
            prefix={'≈'}
            suffix={
              getOperatingConditionUnit(operatingCondition, systemOfMeasurement)
                ?.symbol
            }
            styles={styles.textField}
            type="text"
            step="any"
            onKeyDown={ev => {
              if (ev.key === 'Enter') {
                onEnterPressed();
              }
            }}
            onChange={(ev, newValue) => {
              onUpdateValue(RangeFacetOptionKey.Nearby, newValue);
            }}
            value={
              getOperatingConditionValue(operatingCondition)?.toString() || ''
            }
          />
        );
      case RangeFacetMatchType.Range:
        return (
          <Stack
            styles={{
              root: {
                width: '100%'
              }
            }}
            tokens={{
              childrenGap: rem(spacing.s2),
              padding: `${rem(spacing.s2)} 0 ${rem(spacing.s2)} ${rem(
                spacing.s1
              )}`
            }}
          >
            <Slider
              showValue
              min={0}
              styles={styles.slider}
              ranged
              onChange={(value, range) => {
                if (
                  Number(
                    (
                      getOperatingConditionValue(operatingCondition) as
                        | Range
                        | undefined
                    )?.minimum
                  ) !== range?.[0]
                ) {
                  onUpdateValue(
                    RangeFacetOptionKey.Minimum,
                    range && range[0].toString()
                  );
                }
                if (
                  Number(
                    (
                      getOperatingConditionValue(operatingCondition) as
                        | Range
                        | undefined
                    )?.maximum
                  ) !== range?.[1]
                ) {
                  onUpdateValue(
                    RangeFacetOptionKey.Maximum,
                    range && range[1].toString()
                  );
                }
              }}
              max={180}
              step={5}
              valueFormat={value => `${value}°`}
              value={
                (
                  getOperatingConditionValue(operatingCondition) as
                    | Range
                    | undefined
                )?.maximum || 180
              }
              lowerValue={
                (
                  getOperatingConditionValue(operatingCondition) as
                    | Range
                    | undefined
                )?.minimum || 0
              }
            />
          </Stack>
        );
      default:
        return null;
    }
  }

  return (
    <Stack
      horizontal={horizontal}
      horizontalAlign="space-between"
      verticalAlign="center"
      wrap
      styles={styles.root}
    >
      <Stack
        styles={styles.labelContainer}
        horizontal
        wrap
        verticalAlign="center"
      >
        <Stack.Item>
          <IconButton
            iconProps={{
              iconName: 'info'
            }}
            styles={styles.infoIcon}
            onClick={() => onShowInfo && onShowInfo()}
          />
          <Text styles={styles.label}>
            {/* TODO: Make display name multilingual*/}
            {operatingCondition.configuration.displayName}
          </Text>
        </Stack.Item>
      </Stack>
      <Stack.Item>{renderInput()}</Stack.Item>
    </Stack>
  );
};