import { defineMessages, useIntl } from 'react-intl';

import { DefaultButton, IButtonStyles, Stack, useTheme } from '@fluentui/react';
import { useFinder } from '@providers/finder/finderContext';
import { messageIds } from '@services/i18n/ids';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';

interface ResultsHeaderProps {
  productCount: number;
  modelCount: number;
  onClickFilter?: () => void;
  filterButtonText?: string;
}

const messages = defineMessages({
  count: {
    id: messageIds.finder.resultsHeader.count,
    description: 'Text to describe the result count',
    defaultMessage: 'Products found'
  }
});

export const ResultsHeader: React.FC<ResultsHeaderProps> = props => {
  const { facetedSearchStatus } = useFinder();

  if (facetedSearchStatus !== 'success') {
    return null;
  }
  return (
    <>
      <TabletAndDesktop>
        <DesktopResultsHeader {...props} />
      </TabletAndDesktop>
      <Mobile>
        <MobileResultsHeader {...props} />
      </Mobile>
    </>
  );
};

const DesktopResultsHeader: React.FC<ResultsHeaderProps> = ({
  productCount,
  modelCount
}) => {
  const { formatMessage } = useIntl();
  return (
    <Stack>
      <p>{formatMessage(messages.count, { productCount, modelCount })}</p>
    </Stack>
  );
};

const MobileResultsHeader: React.FC<ResultsHeaderProps> = ({
  onClickFilter,
  filterButtonText
}) => {
  const { palette } = useTheme();
  const styles: Partial<IButtonStyles> = {
    root: {
      borderColor: palette.accent,
      color: palette.accent
    }
  };
  return (
    <Stack.Item>
      <DefaultButton
        styles={styles}
        iconProps={{ iconName: 'Filter' }}
        text={filterButtonText}
        onClick={onClickFilter}
      />
    </Stack.Item>
  );
};
