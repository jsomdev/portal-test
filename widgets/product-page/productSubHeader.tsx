import { useIntl } from 'react-intl';

import { NextLink } from '@components/link/nextLink';
import {
  FontWeights,
  ITextStyles,
  Stack,
  Text,
  useTheme
} from '@fluentui/react';
import { ModelFormatter } from '@services/i18n/formatters/entity-formatters/modelFormatter';
import { Model } from '@services/portal-api';

export interface ProductSubHeaderProps {
  model?: Model | null | undefined;
}

export const ProductSubHeader: React.FC<ProductSubHeaderProps> = ({
  model
}) => {
  const { locale } = useIntl();
  const modelFormatter = new ModelFormatter(model, locale);
  const modelHref = modelFormatter.formatUrl();
  const messages = {
    model: 'Model:'
  };
  const { spacing } = useTheme();

  if (!model || !modelHref) {
    return null;
  }

  const labelStyles: ITextStyles = {
    root: {
      fontWeight: FontWeights.semibold,
      paddingRight: spacing.s1
    }
  };

  return (
    <Stack horizontal wrap>
      <Text styles={labelStyles}>{messages.model}</Text>
      <NextLink href={modelHref} passHref>
        <a className="ms-Link">
          <Text className="ms-Link">{model.number}</Text>
        </a>
      </NextLink>
    </Stack>
  );
};
