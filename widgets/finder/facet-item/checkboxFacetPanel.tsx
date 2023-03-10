import React, { useState } from 'react';

import { defineMessages, useIntl } from 'react-intl';

import {
  IPanelStyles,
  ISearchBoxStyles,
  IStackStyles,
  Panel,
  SearchBox,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { Facet } from '@services/facet-service/models/facet/facet';
import { FacetOption } from '@services/facet-service/models/facet/facetOption';
import { messageIds } from '@services/i18n';
import { Display } from '@services/portal-api';
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
  searchBox: ISearchBoxStyles;
}

const messages = defineMessages({
  ariaClose: {
    id: messageIds.finder.panel.mobile.ariaClose,
    defaultMessage: 'Close'
  },
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
  const { spacing, palette, fonts } = useTheme();

  const styles: CheckboxFacetPanelStyles = {
    searchBox: {
      root: {
        width: '100%'
      },
      field: {
        fontSize: fonts.mediumPlus.fontSize
      }
    },
    panel: {
      commands: {
        background: palette.white,
        zIndex: 1
      },
      contentInner: {
        background: palette.white
      },
      scrollableContent: {
        marginRight: spacing.s1,
        padding: `0 ${spacing.l1}`
      },
      content: {
        padding: 0
      },
      main: {
        background: palette.white,
        paddingBottom: spacing.l1,
        maxWidth: rem('425px')
      }
    },

    panelHeader: {
      root: {
        paddingBottom: spacing.l1,
        background: palette.white,
        width: '100%',
        paddingLeft: spacing.l1
      }
    }
  };

  function testSearchInput(optionDisplays: Display[]): boolean {
    const optionLowerCase = JSON.stringify(optionDisplays).trim().toLowerCase();
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
          styles={styles.searchBox}
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
      closeButtonAriaLabel={formatMessage(messages.ariaClose)}
      styles={styles.panel}
      onRenderHeader={onRenderPanelHeader}
    >
      {options
        .filter((option: FacetOption) =>
          testSearchInput(option.configuration.displays)
        )
        .map(option => {
          return onRenderCheckbox(option);
        })}
    </Panel>
  );
};
