import { NextPage } from 'next';
import { Desktop, mediaDesktop, Mobile } from '@widgets/media-queries';
import { ResponsiveStack } from '@components/stacks/responsiveStack';
import { IStackStyles, mergeStyles, Stack, StackItem } from '@fluentui/react';

const styles = {
  basicExample: {
    backgroundColor: 'red',
    padding: 20,
    ...mediaDesktop({
      backgroundColor: 'blue',
      padding: 40
    })
  }
};

const stackStyles: IStackStyles = {
  root: {
    padding: 5,
    ...mediaDesktop({
      padding: 40
    })
  }
};

const Responsive: NextPage = () => {
  return (
    <div>
      <div className={mergeStyles(styles.basicExample)}>Basic Responsive</div>
      <Stack styles={stackStyles}>
        <StackItem>One</StackItem>
        <StackItem>Two</StackItem>
        <StackItem>Three</StackItem>
      </Stack>
      <div>
        <Mobile>Only shown on mobile</Mobile>
        <Desktop>Only shown on desktop</Desktop>
      </div>
      <ResponsiveStack>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
      </ResponsiveStack>
    </div>
  );
};

export default Responsive;
