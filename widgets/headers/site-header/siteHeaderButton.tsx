import {
  ActionButton,
  FontSizes,
  FontWeights,
  IButtonProps,
  IButtonStyles,
  IProcessedStyleSet,
  mergeStyleSets
} from '@fluentui/react';
import { rem } from '@utilities/rem';
import { Mobile, TabletAndDesktop } from '@widgets/media-queries';
import React from 'react';

export const SiteHeaderButton: React.FC<IButtonProps> = props => {
  return (
    <>
      <Mobile>
        <MobileSiteHeaderButton {...props} />
      </Mobile>
      <TabletAndDesktop>
        <DesktopSiteHeaderButton {...props} />
      </TabletAndDesktop>
    </>
  );
};

const DesktopSiteHeaderButton: React.FC<IButtonProps> = props => {
  const styles: IButtonStyles = {
    label: {
      fontSize: FontSizes.medium,
      letterSpacing: rem(0.38),
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: FontSizes.large
    }
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};

const MobileSiteHeaderButton: React.FC<IButtonProps> = props => {
  const styles: IButtonStyles = {
    label: {
      fontSize: FontSizes.size20,
      fontWeight: FontWeights.regular
    },
    icon: {
      fontSize: FontSizes.size20
    }
  };

  const mergedStyles: IProcessedStyleSet<IButtonStyles> = mergeStyleSets(
    styles,
    props.styles
  );

  return <ActionButton {...props} styles={mergedStyles} />;
};
