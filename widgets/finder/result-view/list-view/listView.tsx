import React, { useContext } from 'react';

import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import { PortalMessageBar } from '@components/messages/portalMessageBar';
import {
  ISpinnerStyles,
  IStackItemStyles,
  IStackStyles,
  List,
  MessageBarType,
  Spinner,
  Stack,
  useTheme
} from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { useGlobalData } from '@providers/global-data/globalDataContext';
import { SystemOfMeasurementContext } from '@providers/system-of-measurement/systemOfMeasurementContext';
import { messageIds } from '@services/i18n';

import { mapFacetedSearchProductsToProductListItems } from './listViewHelper';
import { ProductListItem, ProductListItemProps } from './productListItem';

const messages = defineMessages({
  noResults: {
    id: messageIds.finder.noResults,
    description: 'Info text to display to the user when there are no results',
    defaultMessage:
      'No products were found matching your criteria. Try searching something else or applying different filters.'
  }
});

interface ProductListViewStyles {
  root: IStackItemStyles;
  loadingOverlay: IStackStyles;
  spinner: Partial<ISpinnerStyles>;
}
export const ProductListView: React.FC = () => {
  const { products, isFetching, facetedSearchStatus } = useFinder();
  const { palette } = useTheme();
  const { getAttributeType } = useGlobalData();
  const { systemOfMeasurement } = useContext(SystemOfMeasurementContext);
  const intl = useIntl();

  const listItems: ProductListItemProps[] =
    mapFacetedSearchProductsToProductListItems(
      products,
      systemOfMeasurement,
      intl,
      getAttributeType
    );

  const styles: ProductListViewStyles = {
    loadingOverlay: {
      root: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: palette.whiteTranslucent40
      }
    },
    root: { root: { position: 'relative' } },
    spinner: {
      circle: {
        position: 'absolute',
        top: 100,
        width: 64,
        height: 64,
        borderWidth: 4
      }
    }
  };

  return (
    <Stack.Item styles={styles.root}>
      {(isFetching || facetedSearchStatus === 'loading') && (
        <Stack styles={styles.loadingOverlay}>
          <Spinner styles={styles.spinner} />
        </Stack>
      )}
      {!isFetching &&
        facetedSearchStatus === 'success' &&
        listItems.length === 0 && (
          <PortalMessageBar messageBarType={MessageBarType.info}>
            <FormattedMessage {...messages.noResults} />
          </PortalMessageBar>
        )}
      <List
        items={listItems}
        onRenderCell={item => item && <ProductListItem {...item} />}
      />
    </Stack.Item>
  );
};
