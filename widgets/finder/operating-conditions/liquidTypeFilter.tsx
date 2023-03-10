import React, { useContext, useMemo } from 'react';

import { Guid } from 'guid-typescript';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import {
  IButtonStyles,
  IContextualMenuItem,
  ITextFieldStyles,
  IconButton,
  Stack,
  TextField,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { RangeFacetOptionKey } from '@services/facet-service/models/range-facets/rangeFacetOptionKey';
import { messageIds } from '@services/i18n';
import { ListItemFormatter } from '@services/i18n/formatters/entity-formatters/listItemFormatter';
import { fetchLiquidsWithSpecificGravity } from '@services/portal-api/lists';
import { STATIC_DATA_QUERY_CACHE_OPTIONS } from '@services/react-query/config';
import { QUERYKEYS } from '@services/react-query/constants';
import { rem } from '@utilities/rem';

import { OperatingConditionItemProps } from './operatingConditionItem';

type LiquidTypeFilterProps = Pick<
  OperatingConditionItemProps,
  'operatingCondition'
> & {
  onUpdateValue: (optionKey: RangeFacetOptionKey, newValue: string) => void;
};
interface LiquidTypeFilterStyles {
  textField: Partial<ITextFieldStyles>;
  button: Partial<IButtonStyles>;
}

const messages = defineMessages({
  customValueTitle: {
    id: messageIds.finder.operatingConditions.liquidType.customValue.title,
    defaultMessage: 'Enter value',
    description: 'Text to show the user that they can enter a custom value'
  },
  customValueSuffix: {
    id: messageIds.finder.operatingConditions.liquidType.customValue.suffix,
    defaultMessage: 'sg',
    description: 'Suffix for the specific gravity input'
  },
  customValuePlaceholder: {
    id: messageIds.finder.operatingConditions.liquidType.customValue
      .placeholder,
    defaultMessage: 'Custom (0.5 to 3.00)',
    description: 'Placeholder for the custom specific gravity input'
  }
});
/**
 * Filter with a list of liquid types and a manual input to change the specific gravity
 * used in the operating conditions filter.
 */
export const LiquidTypeFilter: React.FC<LiquidTypeFilterProps> = ({
  operatingCondition,
  onUpdateValue
}) => {
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
  const { spacing } = useTheme();
  const intl = useIntl();
  const { formatMessage, formatNumber, locale } = intl;
  const { getOperatingConditionValue } = useFinder();

  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const onShowContextualMenu = React.useCallback(
    (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault(); // don't navigate
      setShowContextualMenu(true);
    },
    []
  );
  const onHideContextualMenu = React.useCallback(
    () => setShowContextualMenu(false),
    []
  );

  const onSelectOption = React.useCallback(
    (
      ev?:
        | React.MouseEvent<HTMLElement, MouseEvent>
        | React.KeyboardEvent<HTMLElement>
        | undefined,
      item?: IContextualMenuItem | undefined
    ) => {
      onUpdateValue(RangeFacetOptionKey.Exact, item?.data?.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // When the user inputs a custom value
  const onManualInput = React.useCallback(
    (newValue: string | undefined) => {
      // Check if the custom value is valid and is different from the original
      if (
        newValue !==
          getOperatingConditionValue(operatingCondition)?.toString() &&
        Number(newValue) >= 0.5 &&
        Number(newValue) <= 3
      ) {
        const valueWithFixedDecimals = Number(newValue).toFixed(2);
        onUpdateValue(
          RangeFacetOptionKey.Exact,
          valueWithFixedDecimals.toString()
        );
      }
    },
    [getOperatingConditionValue, onUpdateValue, operatingCondition]
  );

  const { data: liquids } = useQuery(
    QUERYKEYS.productFinderLiquidsWithRelativeDensity,
    fetchLiquidsWithSpecificGravity,
    {
      ...STATIC_DATA_QUERY_CACHE_OPTIONS
    }
  );

  const styles: LiquidTypeFilterStyles = {
    textField: {
      field: {
        fontSize: rem(14)
      }
    },
    button: {
      root: {
        padding: rem(3)
      },
      icon: {
        margin: 0
      }
    }
  };

  const liquidMenuItems: IContextualMenuItem[] = useMemo(() => {
    if (!liquids) {
      return [];
    }
    return [
      {
        key: 'user-specified-specific-gravity',
        text: formatMessage(messages.customValueTitle),
        onRender: () => {
          return (
            <Stack
              horizontal
              wrap
              tokens={{
                padding: spacing.s1
              }}
            >
              <TextField
                suffix={formatMessage(messages.customValueSuffix)}
                defaultValue={getOperatingConditionValue(
                  operatingCondition
                )?.toString()}
                onBlur={ev => onManualInput(ev.currentTarget.value)}
                prefix={'='}
                placeholder={formatMessage(messages.customValuePlaceholder, {
                  minimum: formatNumber(0.5, { minimumSignificantDigits: 2 }),
                  maximum: formatNumber(3, { minimumSignificantDigits: 2 })
                })}
                type="number"
                styles={styles.textField}
              />
            </Stack>
          );
        }
      },
      ...liquids.map((listItem): IContextualMenuItem => {
        const listItemFormatter: ListItemFormatter = new ListItemFormatter(
          listItem,
          intl,
          systemOfMeasurement,
          locale
        );
        return {
          key: listItem.id || Guid.create().toString(),
          text: listItemFormatter.formatDisplayValue(),
          selected:
            listItem.value === 1 &&
            getOperatingConditionValue(operatingCondition) === null,
          data: listItem
        };
      })
    ];
  }, [
    formatMessage,
    formatNumber,
    getOperatingConditionValue,
    intl,
    liquids,
    locale,
    onManualInput,
    operatingCondition,
    spacing.s1,
    styles.textField,
    systemOfMeasurement
  ]);

  return (
    <Stack.Item>
      <IconButton
        styles={styles.button}
        menuProps={{
          items: liquidMenuItems,
          hidden: !showContextualMenu,
          onItemClick: onSelectOption,
          onDismiss: onHideContextualMenu
        }}
        onClick={onShowContextualMenu}
        iconProps={{
          iconName: 'Drop'
        }}
      />
    </Stack.Item>
  );
};
