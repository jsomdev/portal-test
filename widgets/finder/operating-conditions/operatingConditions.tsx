import React, { useEffect, useMemo, useState } from 'react';

import { useIntl } from 'react-intl';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import {
  Dialog,
  IImageStyles,
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

import { OperatingConditionItem } from './operatingConditionItem';
import {
  diffOperatingConditionsFacets,
  validateSprayFinderFacets
} from './operatingConditionsHelper';

interface SprayFinderFiltersStyles {
  logo: Partial<IImageStyles>;
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
    defaultMessage: 'When you specificy Specific Gravity',
    description:
      'Validation text when liquid flow rate is not filled in and you have a specific gravity specified'
  }
});

export const OperatingConditions: React.FC = () => {
  const { spacing } = useTheme();
  const { getAttributeType } = useGlobalData();
  const { formatMessage, locale } = useIntl();
  const {
    visibleOperatingConditionsFacets: operatingConditions,
    applyOperatingConditions
  } = useFinder();

  // AttributeTypeCode to show the information of. If undefined no information will be shown.
  const [showInfoAttributeTypeCode, setShowInfoAttributeTypeCode] = useState<
    string | undefined
  >(undefined);

  // Boolean to show an error in the operating conditions input validation
  const [showInputError, setShowInputError] = useState<boolean>(false);

  // Operating Conditions that are not immediately persisted to the Finder
  const [staleOperatingConditions, setStaleOperatingConditions] = useState<{
    [key: string]: Facet;
  }>(operatingConditions);

  const isModified = useMemo(() => {
    return diffOperatingConditionsFacets(
      Object.values(staleOperatingConditions),
      Object.values(operatingConditions)
    );
  }, [staleOperatingConditions, operatingConditions]);

  const validationResults = useMemo(() => {
    return validateSprayFinderFacets(Object.values(staleOperatingConditions));
  }, [staleOperatingConditions]);

  const isValid: boolean = useMemo(() => {
    const isAnyFacetInvalid: boolean =
      !!validationResults.validatedResults.find(value => !value.isValid);
    return !isAnyFacetInvalid && validationResults.validatedTheoriticalFlow;
  }, [validationResults]);

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
    setStaleOperatingConditions(operatingConditions);
  }, [operatingConditions]);
  return (
    <>
      <Stack
        tokens={{
          maxWidth: 340,
          childrenGap: rem(spacing.s1),
          padding: `0 ${spacing.l1} 0 0`
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
              setShowInfoAttributeTypeCode(operatingCondition.key)
            }
            horizontal={
              operatingCondition.key !== FacetKey.SprayAngle &&
              operatingCondition.key !== FacetKey.LiquidSpecificGravity
            }
            onEnterPressed={() => {
              if (isValid && isModified) {
                applyOperatingConditions(
                  Object.values(staleOperatingConditions)
                );
              }
            }}
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
            disabled={!isModified}
            iconProps={{
              iconName: 'Accept'
            }}
            onClick={ev =>
              applyOperatingConditions(Object.values(staleOperatingConditions))
            }
          >
            {formatMessage(messages.apply)}
          </PrimaryButton>
          {/* <DefaultButton
                 iconProps={{ iconName: 'Undo' }}
                 disabled={!isModified}
                 onClick={(ev) => onReset()}
               >
                 {messages.reset}
               </DefaultButton> */}
        </Stack>
      </Stack>
      <Stack.Item>
        <MarkDownDialog
          dialogProps={{
            onDismiss: ev => setShowInfoAttributeTypeCode(undefined),
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
                  <Text variant="mediumPlus">
                    {/* TODO Make displayname multilingual */}
                    {
                      staleOperatingConditions[result.key].configuration
                        .displayName
                    }
                  </Text>
                  <ul>
                    <li>{formatMessage(messages.validationGreaterThanZero)}</li>
                  </ul>
                </Stack.Item>
              ))}
            {!validationResults.validatedTheoriticalFlow && (
              <Stack.Item>
                <Text variant="mediumPlus">
                  {formatMessage(messages.validationRequiredFlowRate)}
                </Text>
                <ul>
                  <li>
                    {formatMessage(messages.validationRequiredFlowRatePressure)}
                  </li>
                  <li>
                    {formatMessage(messages.validationRequiredFlowRateGravity)}
                  </li>
                </ul>
              </Stack.Item>
            )}
          </Stack>
        </Dialog>
      </Stack.Item>
    </>
  );
};
