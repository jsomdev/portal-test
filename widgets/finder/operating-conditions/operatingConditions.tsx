import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useIntl } from 'react-intl';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import {
  Dialog,
  IButtonStyles,
  PrimaryButton,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { defineMessages } from '@formatjs/intl';
import { useFinder } from '@providers/finder/finderContext';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetKey } from '@services/facet-service/models/facet/facetKey';
import { messageIds } from '@services/i18n';
import { AttributeTypeFormatter } from '@services/i18n/formatters/entity-formatters/attributeTypeFormatter';
import { rem } from '@utilities/rem';
import { mediaQueryFrom } from '@widgets/media-queries';

import { FacetContainer } from '../facet-item/facetContainer';
import { OperatingConditionItem } from './operatingConditionItem';
import {
  OperatingConditionsValidationResults,
  diffOperatingConditionsFacets,
  validateSprayFinderFacets
} from './operatingConditionsHelper';

interface OperatingConditionsStyles {
  applyButton: Partial<IButtonStyles>;
}

const messages = defineMessages({
  apply: {
    id: messageIds.finder.operatingConditions.actions.apply,
    defaultMessage: 'Apply',
    description: 'Button text for the apply operatingConditions filter'
  },
  validationTitle: {
    id: messageIds.finder.operatingConditions.validation.title,
    defaultMessage: 'Incorrect input values',
    description: 'Title for the input validation on operating conditions'
  },
  validationGreaterThanZero: {
    id: messageIds.finder.operatingConditions.validation.greaterThanZero,
    defaultMessage: 'Value must be greater than 0',
    description: 'Validation text when value is not greater than 0'
  },
  validationRequiredFlowRate: {
    id: messageIds.finder.operatingConditions.validation.requiredFlowRate,
    defaultMessage: 'Liquid Flow Rate is Required',
    description: 'Validation text when liquid flow rate is not filled in'
  },
  validationRequiredFlowRatePressure: {
    id: messageIds.finder.operatingConditions.validation
      .requiredFlowRatePressure,
    defaultMessage: 'When you specificy Liquid Pressure',
    description:
      'Validation text when liquid flow rate is not filled in and you have a liquid pressure specified'
  },
  validationRequiredFlowRateGravity: {
    id: messageIds.finder.operatingConditions.validation
      .requiredFlowRateGravity,
    defaultMessage: 'When you specify Specific Gravity',
    description:
      'Validation text when liquid flow rate is not filled in and you have a specific gravity specified'
  }
});

export const OperatingConditions: React.FC = () => {
  const { spacing } = useTheme();
  const { getAttributeType } = useGlobalData();
  const { formatMessage, locale } = useIntl();
  const { visibleOperatingConditionsFacets, applyOperatingConditions } =
    useFinder();

  // AttributeTypeCode to show the information of. If undefined no information will be shown.
  const [showInfoAttributeTypeCode, setShowInfoAttributeTypeCode] = useState<
    string | undefined
  >(undefined);

  // Boolean to show an error in the operating conditions input validation
  const [showInputError, setShowInputError] = useState<boolean>(false);

  // Operating Conditions that are not immediately persisted to the Finder
  const [staleOperatingConditions, setStaleOperatingConditions] = useState<{
    [key: string]: Facet;
  }>(visibleOperatingConditionsFacets);

  const isModified = useMemo(() => {
    return diffOperatingConditionsFacets(
      Object.values(staleOperatingConditions),
      Object.values(visibleOperatingConditionsFacets)
    );
  }, [staleOperatingConditions, visibleOperatingConditionsFacets]);

  const validationResults: OperatingConditionsValidationResults =
    useMemo(() => {
      return validateSprayFinderFacets(Object.values(staleOperatingConditions));
    }, [staleOperatingConditions]);

  const isValid: boolean = useMemo(() => {
    const isAnyFacetInvalid: boolean =
      !!validationResults.validatedResults.find(value => !value.isValid);
    return !isAnyFacetInvalid && validationResults.validatedTheoriticalFlow;
  }, [validationResults]);

  const onApply = useCallback(() => {
    if (isValid) {
      applyOperatingConditions(Object.values(staleOperatingConditions));
    } else {
      setShowInputError(true);
    }
  }, [isValid, applyOperatingConditions, staleOperatingConditions]);

  function getAttributeTypeTitle(
    attributeTypeCode: string | undefined
  ): string {
    if (attributeTypeCode === undefined) {
      return '';
    }
    const attributeTypeFormatter: AttributeTypeFormatter =
      new AttributeTypeFormatter(getAttributeType(attributeTypeCode), locale);
    return attributeTypeFormatter.formatName();
  }
  function getAttributeTypeDescription(
    attributeTypeCode: string | undefined
  ): string {
    if (attributeTypeCode === undefined) {
      return '';
    }
    const attributeTypeFormatter: AttributeTypeFormatter =
      new AttributeTypeFormatter(getAttributeType(attributeTypeCode), locale);
    return attributeTypeFormatter.formatDescription();
  }

  useEffect(() => {
    // Whenever the actual operatingConditions update, we want to update the stale ones as well.
    setStaleOperatingConditions(visibleOperatingConditionsFacets);
  }, [visibleOperatingConditionsFacets]);

  const styles: OperatingConditionsStyles = {
    applyButton: {
      root: {
        flex: 1,
        height: rem(36),
        ...mediaQueryFrom('tablet', {
          height: rem(32),
          flex: 'none'
        })
      }
    }
  };

  return (
    <FacetContainer facetTitle="Operating Conditions">
      <Stack
        tokens={{
          maxWidth: 340,
          childrenGap: rem(spacing.s1),
          padding: `${spacing.s1} ${spacing.m} 0 0`
        }}
      >
        {Object.values(staleOperatingConditions).map(operatingCondition => (
          <OperatingConditionItem
            key={operatingCondition.key}
            operatingCondition={operatingCondition}
            onChange={updatedOperatingCondition =>
              setStaleOperatingConditions(previousState => ({
                ...previousState,
                [updatedOperatingCondition.key]: updatedOperatingCondition
              }))
            }
            onShowInfo={() =>
              setShowInfoAttributeTypeCode(operatingCondition.attributeTypeCode)
            }
            horizontal={
              operatingCondition.key !== FacetKey.SprayAngle &&
              operatingCondition.key !== FacetKey.LiquidSpecificGravity
            }
            onEnterPressed={onApply}
          />
        ))}
        <Stack
          horizontal
          wrap
          tokens={{
            childrenGap: rem(spacing.s1),
            padding: `0 0 ${rem(spacing.s1)} 0`
          }}
          verticalAlign="center"
        >
          <PrimaryButton
            styles={styles.applyButton}
            disabled={!isModified}
            iconProps={{
              iconName: 'Accept'
            }}
            onClick={onApply}
          >
            {formatMessage(messages.apply)}
          </PrimaryButton>
        </Stack>
      </Stack>
      <Stack.Item>
        <MarkDownDialog
          dialogProps={{
            onDismiss: () => setShowInfoAttributeTypeCode(undefined),
            hidden: !showInfoAttributeTypeCode
          }}
          title={getAttributeTypeTitle(showInfoAttributeTypeCode)}
          markdownSource={getAttributeTypeDescription(
            showInfoAttributeTypeCode
          )}
        />
        <Dialog
          dialogContentProps={{
            showCloseButton: true
          }}
          hidden={!showInputError}
          title={formatMessage(messages.validationTitle)}
          onDismiss={() => setShowInputError(false)}
        >
          <Stack>
            {validationResults.validatedResults
              .filter(result => !result.isValid)
              .map(result => (
                <Stack.Item key={result.key}>
                  <Text as="h4" variant="large">
                    {/* TODO Make displayname multilingual */}
                    {
                      staleOperatingConditions[result.key].configuration
                        .displayName
                    }
                  </Text>
                  <ul>
                    <li>
                      <Text as="p" variant="mediumPlus">
                        {formatMessage(messages.validationGreaterThanZero)}
                      </Text>
                    </li>
                  </ul>
                </Stack.Item>
              ))}
            {!validationResults.validatedTheoriticalFlow && (
              <Stack.Item>
                <Text as="h4" variant="large">
                  {formatMessage(messages.validationRequiredFlowRate)}
                </Text>
                <ul>
                  <li>
                    <Text as="p" variant="mediumPlus">
                      {formatMessage(
                        messages.validationRequiredFlowRatePressure
                      )}
                    </Text>
                  </li>
                  <li>
                    <Text as="p" variant="mediumPlus">
                      {formatMessage(
                        messages.validationRequiredFlowRateGravity
                      )}
                    </Text>
                  </li>
                </ul>
              </Stack.Item>
            )}
          </Stack>
        </Dialog>
      </Stack.Item>
    </FacetContainer>
  );
};
