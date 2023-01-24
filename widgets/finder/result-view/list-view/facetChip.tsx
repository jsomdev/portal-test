import { useState } from 'react';

import { MarkDownDialog } from '@components/dialogs/markDownDialog';
import { ITextStyles, Text, useTheme } from '@fluentui/react';

interface FacetChipStyles {
  root: ITextStyles;
}

interface FacetChipProps {
  code: string;
  value: string;
  description: string;
  title: string;
}
// TODO: move to better folder
export const FacetChip: React.FC<FacetChipProps> = ({
  value,
  code,
  title,
  description
}) => {
  const { palette } = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  const hasDialog: boolean = !!(code && description);
  const styles: FacetChipStyles = {
    root: {
      root: {
        color: palette.neutralPrimaryAlt,
        borderBottom: `1px ${hasDialog ? 'dashed' : 'none'} ${
          palette.neutralPrimaryAlt
        }`,
        lineHeight: '140%',
        display: 'inline',
        '&:hover': {
          cursor: hasDialog ? 'pointer' : 'default',
          borderBottomStyle: hasDialog ? `solid` : 'none'
        }
      }
    }
  };
  return (
    <>
      <Text
        onClick={hasDialog ? () => setShowDialog(true) : undefined}
        title={code}
        styles={styles.root}
      >
        {value}
      </Text>
      <MarkDownDialog
        dialogProps={{
          onDismiss: () => setShowDialog(false),
          hidden: !showDialog
        }}
        title={title}
        markdownSource={description}
      />
    </>
  );
};
