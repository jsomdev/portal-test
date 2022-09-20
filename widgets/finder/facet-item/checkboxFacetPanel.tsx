import React, { useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  IPanelStyles,
  IStackStyles,
  Panel,
  PanelType,
  SearchBox,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { messageIds } from '@services/i18n';
import { rem } from '@utilities/rem';

export interface CheckboxFacetPanelProps {
  isPanelOpen: boolean;
  setIsPanelOpen: (value: boolean) => void;
  facet: Facet;
  options: FacetOption[];
  onRenderCheckbox: (option: FacetOption) => JSX.Element;
}

export interface CheckboxFacetPanelStyles {
  panel: Partial<IPanelStyles>;
  panelHeader: IStackStyles;
}

const messages = defineMessages({
  inputPlaceholder: {
    id: messageIds.finder.checkboxFacet.panel.placeholder,
    defaultMessage: 'Search',
    description: 'Text to show as placeholder for checkbox panel'
  }
});

export const CheckboxFacetPanel: React.FC<CheckboxFacetPanelProps> = ({
  isPanelOpen,
  setIsPanelOpen,
  facet,
  options,
  onRenderCheckbox
}) => {
  const [panelSearchValue, setPanelSearchValue] = useState<string>('');
  const { formatMessage } = useIntl();
  const { spacing } = useTheme();

  const styles: CheckboxFacetPanelStyles = {
    panel: {
      commands: {
        zIndex: 1
      },
      scrollableContent: {
        marginRight: rem(spacing.s1),
        padding: `0 ${rem(spacing.l1)}`
      },
      content: {
        padding: 0
      },
      main: {
        paddingBottom: rem(spacing.l1),
        maxWidth: rem('425px')
      }
    },

    panelHeader: {
      root: {
        paddingBottom: rem(spacing.l1),

        width: '100%',
        paddingLeft: rem(spacing.l1)
      }
    }
  };

  function testSearchInput(option: string): boolean {
    const optionLowerCase = option.trim().toLowerCase();
    const panelSearchValueLowerCase = panelSearchValue.trim().toLowerCase();
    if (panelSearchValue.trim().length > 0) {
      return optionLowerCase.includes(panelSearchValueLowerCase);
    } else return true;
  }

  const onRenderPanelHeader = (): JSX.Element => {
    return (
      <Stack tokens={{ childrenGap: spacing.m }} styles={styles.panelHeader}>
        <Text variant="large">{facet.configuration.displayName}</Text>
        <SearchBox
          placeholder={formatMessage(messages.inputPlaceholder)}
          onSearch={newValue => setPanelSearchValue(newValue)}
          onChange={e => {
            setPanelSearchValue(e?.target.value || '');
          }}
        />
      </Stack>
    );
  };

  return (
    <Panel
      isLightDismiss
      isOpen={isPanelOpen}
      onDismiss={() => {
        setIsPanelOpen(false);
      }}
      closeButtonAriaLabel="Close"
      isFooterAtBottom={true}
      type={PanelType.custom}
      customWidth={'100%'}
      styles={styles.panel}
      onRenderHeader={onRenderPanelHeader}
    >
      {options
        .filter((option: FacetOption) => testSearchInput(option.key))
        .map((option, i) => {
          return onRenderCheckbox(option);
        })}
    </Panel>
  );
};
