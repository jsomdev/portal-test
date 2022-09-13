import { defineMessages, useIntl } from 'react-intl';

import {
  FontSizes,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  PrimaryButton,
  Stack,
  useTheme
} from '@fluentui/react';
import { messageIds } from '@services/i18n/ids';
import { rem } from '@utilities/rem';
import { Desktop, Mobile } from '@widgets/media-queries';

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
  return (
    <>
      <Desktop>
        <DesktopResultsHeader {...props} />
      </Desktop>
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
  return (
    <Stack>
      <FilterResultsButton text={filterButtonText} onClick={onClickFilter} />
    </Stack>
  );
};

type FilterResultsButtonProps = Pick<IButtonProps, 'onClick' | 'text'>;

export const FilterResultsButton: React.FC<FilterResultsButtonProps> = ({
  text,
  onClick
}) => {
  const { spacing } = useTheme();

  const styles: IButtonStyles = {
    root: {
      padding: rem(spacing.l1)
    },
    label: {
      fontSize: rem(FontSizes.large),
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: rem(FontSizes.large)
    }
  };
  return (
    <PrimaryButton
      styles={styles}
      onClick={onClick}
      iconProps={{ iconName: 'Filter' }}
      text={text}
    />
  );
};
