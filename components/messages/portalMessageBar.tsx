import React, { useMemo } from 'react';

import {
  IMessageBarProps,
  IMessageBarStyles,
  IProcessedStyleSet,
  IStackStyles,
  MessageBar,
  MessageBarType,
  Stack,
  mergeStyleSets,
  useTheme
} from '@fluentui/react';
import { rem } from '@utilities/rem';

interface PortalMessageBarStyles {
  messageBar: IMessageBarStyles;
  innerContainer: IStackStyles;
  sideBar: IStackStyles;
  outerContainer: IStackStyles;
}

export const PortalMessageBar: React.FC<
  IMessageBarProps & { messageBarType: MessageBarType }
> = props => {
  const { effects, palette, semanticColors, spacing } = useTheme();

  const accentColor: string = useMemo(() => {
    switch (props.messageBarType) {
      case MessageBarType.error:
        return semanticColors.errorIcon;
      case MessageBarType.severeWarning:
        return semanticColors.severeWarningIcon;
      case MessageBarType.success:
        return semanticColors.successIcon;
      case MessageBarType.warning:
        return palette.yellowDark;
      case MessageBarType.info:
        return semanticColors.infoIcon;
      case MessageBarType.blocked:
        return semanticColors.errorIcon;
      default:
        return semanticColors.infoIcon;
    }
  }, [palette, props, semanticColors]);

  const styles: PortalMessageBarStyles = {
    messageBar: {
      actions: {
        flexDirection: 'row',
        marginTop: spacing.m,
        marginLeft: 36
      }
    },
    innerContainer: {
      root: {
        borderRadius: effects.roundedCorner4,
        overflow: 'hidden',
        width: '100%'
      }
    },
    outerContainer: {
      root: {
        width: '100%'
      }
    },
    sideBar: {
      root: {
        borderLeft: `${effects.roundedCorner4} solid ${accentColor}`,
        backgroundColor: accentColor,
        width: rem(6)
      }
    }
  };

  const mergedStyles: IProcessedStyleSet<IMessageBarStyles> = mergeStyleSets(
    styles.messageBar,
    props.styles
  );

  return (
    <Stack styles={styles.outerContainer}>
      <Stack horizontal wrap={false} styles={styles.innerContainer}>
        <Stack styles={styles.sideBar}></Stack>
        <MessageBar {...props} styles={mergedStyles}>
          {props.children}
        </MessageBar>
      </Stack>
    </Stack>
  );
};
