import React, { useContext, useMemo, useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import {
  ActionButton,
  Checkbox,
  IButtonStyles,
  ICheckboxStyles,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { messageIds } from '@services/i18n';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import {
  FacetFormatter,
  FacetOptionFormatter
} from '@services/i18n/formatters/facetFormatter';
import { AttributeType } from '@services/portal-api';
import { FacetedSearchFacetResult } from '@services/portal-api/faceted-search/types';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

import {
  filterActiveCheckboxFacetOption,
  filterFacetOptionWithResults,
  getPredictedCountForOption,
  sortFacetOptions
} from '../helper';
import { CheckboxFacetPanel } from './checkboxFacetPanel';
import { FacetContainer } from './facetContainer';

export interface CheckboxFacetProps {
  facet: Facet;
  isActive: boolean;
  predictedResults: FacetedSearchFacetResult[] | undefined;
  onSelect: (optionKey: string) => void;
}

export interface CheckboxFacetStyles {
  checkbox?: ICheckboxStyles;
  checkboxTitle?: ITextStyles;
  result?: ITextStyles;
  showMoreButton?: Partial<IButtonStyles>;
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

  const { fonts, spacing, palette } = useTheme();
  const styles: CheckboxFacetStyles = {
    result: {
      root: {
        fontSize: fonts.large.fontSize,
        color: palette.themeSecondary
      }
    },
    checkboxTitle: {
      root: {
        fontSize: fonts.large.fontSize,
        fontWeight: 300
      }
    },
    showMoreButton: {
      root: {
        ...fonts.mediumPlus,
        color: palette.accent,
        height: rem('150%'),
        alignSelf: 'flex-start',
        paddingLeft: 0,
        ...mediaQueryFrom('tablet', {
          fontSize: fonts.medium.fontSize
        }),
        selectors: {
          '& i': {
            ...fonts.mediumPlus,
            marginLeft: 0,
            color: palette.accent,
            ...mediaQueryFrom('tablet', {
              fontSize: fonts.medium.fontSize
            })
          }
        }
      }
    },
    checkbox: {
      root: {
        marginTop: rem(4),
        marginBottom: rem(4),
        ...mediaQueryFrom('tablet', {
          marginTop: 0,
          marginBottom: 0
        })
      },
      checkbox: {
        height: rem(24),
        width: rem(24),
        ...mediaQueryFrom('tablet', {
          height: rem(16),
          width: rem(16)
        })
      },
      checkmark: {
        fontSize: fonts.xLargePlus.fontSize,
        ...mediaQueryFrom('tablet', {
          fontSize: fonts.mediumPlus.fontSize
        })
      }
    }
  };
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
    return options.length > minLength + 1;
  }, [options]);

  const showSearchButton = useMemo(() => {
    const minLength = 20;
    return options.length > minLength + 1;
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
      <Stack horizontal={true} tokens={{ childrenGap: spacing.s2 }}>
        {/* {renderLabelPrefix(option)} */}
        <Stack.Item>
          <Text variant="mediumPlus" styles={styles.checkboxTitle}>
            {facetOptionFormatter.formatDisplayValue()}
          </Text>
          <Text variant="mediumPlus" styles={styles.result}>
            {facetOptionFormatter.formatPredictedResult()}
          </Text>
        </Stack.Item>
      </Stack>
    );
  }

  function onRenderCheckbox(option: FacetOption): JSX.Element {
    return (
      <Checkbox
        styles={styles.checkbox}
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
        onChange={() => {
          onSelect(option.key);
        }}
        checked={option.isActive}
        key={option.key}
        onRenderLabel={() => renderLabel(option, predictedResults || [])}
      />
    );
  }

  return (
    <FacetContainer
      onShowInfo={
        attributeType?.description ? () => setShowFacetDialog(true) : undefined
      }
      facetTitle={facetFormatter.formatTitle()}
    >
      <MarkDownDialog
        dialogProps={{
          onDismiss: () => setShowFacetDialog(false),
          hidden: !showFacetDialog
        }}
        title={attributeTypeFormatter.formatName()}
        markdownSource={attributeTypeFormatter.formatDescription()}
      />
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
            styles={styles.showMoreButton}
            iconProps={{ iconName: 'Search' }}
            text={formatMessage(messages.more)}
            onClick={() => setIsPanelOpen(true)}
          />
        ) : (
          showExpandButton && (
            <ActionButton
              styles={styles.showMoreButton}
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
