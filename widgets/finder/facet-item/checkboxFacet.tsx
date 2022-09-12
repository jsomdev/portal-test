import React, { useContext, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  ActionButton,
  Checkbox,
  classNamesFunction,
  FontWeights,
  IStyle,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { FacetSelectType } from '@services/facet-service/models/facet/facetSelectType';
import { messageIds } from '@services/i18n';
import {
  FacetFormatter,
  FacetOptionFormatter
} from '@services/i18n/formatters/facetFormatter';
import { FacetedSearchFacetResult } from '@services/portal-api/faceted-search/types';
import { rem } from '@utilities/rem';

import {
  filterActiveCheckboxFacetOption,
  filterFacetOptionWithResults,
  getPredictedCountForOption,
  sortFacetOptions
} from '../helper';
import { CheckboxFacetPanel } from './checkboxFacetPanel';
import { FacetContainer } from './facetContainer';
import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import { AttributeType } from '@services/portal-api';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';

const getClassNames = classNamesFunction<
  Record<string, unknown>,
  CheckboxFacetStyles
>();

export interface CheckboxFacetProps {
  facet: Facet;
  predictedResults: FacetedSearchFacetResult[] | undefined;
  onSelect: (optionKey: string) => void;
}

export interface CheckboxFacetStyles {
  checkbox?: IStyle;
  checkboxTitle?: IStyle;
  result?: IStyle;
  showMoreButton?: IStyle;
}

const messages = defineMessages({
  more: {
    id: messageIds.finder.checkboxFacet.actions.more,
    defaultMessage: 'More',
    description: 'Button text to show more options'
  },
  less: {
    id: messageIds.finder.checkboxFacet.actions.less,
    defaultMessage: 'Less',
    description: 'Button text to show less options'
  }
});

export const CheckboxFacet: React.FC<CheckboxFacetProps> = ({
  facet,
  predictedResults,
  onSelect
}) => {
  const { formatMessage, locale } = useIntl();
  const { getAttributeType } = useGlobalData();
  const attributeType: AttributeType | undefined = getAttributeType(
    facet.attributeTypeCode
  );
  const attributeTypeFormatter: AttributeTypeFormatter =
    new AttributeTypeFormatter(attributeType, locale);
  const facetFormatter: FacetFormatter = new FacetFormatter(
    facet,
    getAttributeType(facet.attributeTypeCode),
    locale
  );
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showFacetDialog, setShowFacetDialog] = useState<boolean>(false);
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);

  const intl = useIntl();

  const theme = useTheme();
  const { palette, fonts, effects } = theme;
  const styles: CheckboxFacetStyles = {
    result: {
      color: palette.themeSecondary
    },
    showMoreButton: {
      ...fonts.small,
      color: palette.accent,
      height: rem('150%'),
      alignSelf: 'flex-start',
      paddingLeft: 0,
      selectors: {
        '& i': {
          ...fonts.small,
          marginLeft: 0,
          color: palette.accent
        }
      }
    },
    checkbox: {
      color: palette.neutralPrimary,
      fontWeight: 300,
      selectors: {
        '& .ms-Checkbox-checkbox': {
          height: rem(16),
          width: rem(16),
          fontSize: rem(16),
          borderRadius:
            (facet.configuration.selectType === FacetSelectType.SingleSelect &&
              rem(8)) ||
            effects.roundedCorner2
        }
      }
    }
  };
  const classNames = getClassNames(styles, { theme });
  const options: FacetOption[] = useMemo(() => {
    let newOptions = facet.options.slice();
    newOptions = newOptions
      .filter(option => {
        return (
          filterActiveCheckboxFacetOption(option) ||
          filterFacetOptionWithResults(option, predictedResults)
        );
      })
      .sort((a, b) => {
        const optionFormatterA: FacetOptionFormatter = new FacetOptionFormatter(
          a,
          undefined,
          intl,
          systemOfMeasurement,
          locale
        );
        const optionFormatterB: FacetOptionFormatter = new FacetOptionFormatter(
          b,
          undefined,
          intl,
          systemOfMeasurement,
          locale
        );
        return sortFacetOptions(
          {
            ...a,
            formattedValue: optionFormatterA.formatDisplayValue()
          },
          {
            ...b,
            formattedValue: optionFormatterB.formatDisplayValue()
          }
        );
      });

    return newOptions;
  }, [facet.options, intl, locale, predictedResults, systemOfMeasurement]);

  const showExpandButton = useMemo(() => {
    const minLength = 5;
    const showExpand = options.length > minLength + 1;
    return showExpand;
  }, [options]);

  const showSearchButton = useMemo(() => {
    const minLength = 20;
    const showSearch = options.length > minLength + 1;
    return showSearch;
  }, [options]);

  const additionalSelectedOptions: FacetOption[] = useMemo(() => {
    if (isShowingMore) {
      return [];
    }

    return options
      .slice(showExpandButton ? 5 : 6)
      .filter(option => option.isActive);
  }, [isShowingMore, options, showExpandButton]);

  function renderLabel(
    option: FacetOption,
    result: FacetedSearchFacetResult[]
  ): JSX.Element {
    const facetOptionFormatter: FacetOptionFormatter = new FacetOptionFormatter(
      option,
      getPredictedCountForOption(result, option.valueId, option.value),
      intl,
      systemOfMeasurement,
      locale
    );
    return (
      <Stack horizontal={true} tokens={{ childrenGap: rem(4) }}>
        {/* {renderLabelPrefix(option)} */}
        <Stack.Item>
          <Text variant="mediumPlus">
            {facetOptionFormatter.formatDisplayValue()}
          </Text>
          <Text variant="mediumPlus" className={classNames.result}>
            {facetOptionFormatter.formatPredictedResult()}
          </Text>
        </Stack.Item>
      </Stack>
    );
  }

  function onRenderCheckbox(option: FacetOption): JSX.Element {
    return (
      <Checkbox
        disabled={
          !option.isActive
            ? facet.configuration.isFacetingEnabled &&
              !!predictedResults &&
              !getPredictedCountForOption(
                predictedResults,
                option.valueId,
                option.value
              )
            : false
        }
        onChange={(ev, checked) => {
          onSelect(option.key);
        }}
        checked={option.isActive}
        className={classNames.checkbox}
        styles={{
          label: {
            alignItems: 'flex-start',
            selectors: {
              '& .ms-Checkbox-checkbox': {
                marginTop: rem(2)
              }
            }
          }
        }}
        key={option.key}
        onRenderLabel={props => renderLabel(option, predictedResults || [])}
      />
    );
  }

  return (
    <FacetContainer
      onShowInfo={attributeType ? () => setShowFacetDialog(true) : undefined}
      facetTitle={facetFormatter.formatTitle()}
    >
      <MarkDownDialog
        dialogProps={{
          onDismiss: ev => setShowFacetDialog(false),
          hidden: !showFacetDialog
        }}
        title={attributeTypeFormatter.formatName()}
        markdownSource={attributeTypeFormatter.formatDescription()}
      />
      {/* <ProductSpecificationDialog
        dialogProps={{
          onDismiss: ev => setShowSpecificationDialog(false),
          hidden: !showSpecificationDialog
        }}
        attributeTypeCode={facet.attributeTypeCode}
      /> */}
      <Stack tokens={{ childrenGap: rem(2) }}>
        {isPanelOpen && (
          <CheckboxFacetPanel
            facet={facet}
            isPanelOpen={isPanelOpen}
            setIsPanelOpen={setIsPanelOpen}
            onRenderCheckbox={onRenderCheckbox}
            options={options}
          />
        )}
        <Stack.Item>
          {options
            .slice(
              0,
              (isShowingMore && options.length) ||
                (options.length === 6 && 6) ||
                5
            )
            .concat(additionalSelectedOptions)
            .map(option => {
              return onRenderCheckbox(option);
            })}
        </Stack.Item>
        {showSearchButton ? (
          <ActionButton
            className={classNames.showMoreButton}
            iconProps={{ iconName: 'Search' }}
            text={formatMessage(messages.more)}
            onClick={() => setIsPanelOpen(true)}
          />
        ) : (
          showExpandButton && (
            <ActionButton
              className={classNames.showMoreButton}
              onClick={() => setIsShowingMore(!isShowingMore)}
              text={
                (isShowingMore && formatMessage(messages.less)) ||
                formatMessage(messages.more)
              }
              iconProps={{
                iconName: (isShowingMore && 'ChevronUp') || 'ChevronDown'
              }}
            />
          )
        )}
      </Stack>
    </FacetContainer>
  );
};
