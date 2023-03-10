import { NextPage } from 'next';

import { ResponsiveStack } from '@components/stacks/responsiveStack';
import { IStackStyles, Stack, StackItem, mergeStyles } from '@fluentui/react';
import {
  Mobile,
  TabletAndDesktop,
  mediaQueryFrom,
  useTabletAndDesktop
} from '@widgets/media-queries';

const styles = {
  basicExample: {
    backgroundColor: 'red',
    padding: 20,
    ...mediaQueryFrom('tablet', {
      backgroundColor: 'blue',
      padding: 40
    })
  }
};

const stackStyles: IStackStyles = {
  root: {
    padding: 5,
    ...mediaQueryFrom('tablet', {
      padding: 40
    })
  }
};

const Responsive: NextPage = () => {
  const isTabletOrDesktop = useTabletAndDesktop(); //try not to use the hooks, as they only work client-side and not when SSR
  return (
    <div>
      {isTabletOrDesktop && <div>Tablet or desktop</div>}
      <div className={mergeStyles(styles.basicExample)}>Basic Responsive</div>
      <Stack styles={stackStyles}>
        <Mobile>
          {(className, renderChildren) => (
            <StackItem className={className}>
              {renderChildren && 'Stack Item: Mobile only'}
            </StackItem>
          )}
        </Mobile>
        <TabletAndDesktop>
          {(className, renderChildren) => (
            <StackItem className={className}>
              {renderChildren && 'Stack Item: Tablet/Desktop only'}
            </StackItem>
          )}
        </TabletAndDesktop>
        <StackItem>Stack Item 2</StackItem>
        <StackItem>Stack Item 3</StackItem>
      </Stack>
      <div>
        <Mobile>
          {(className, renderChildren) => (
            <p className={className}>
              {renderChildren && 'Only shown on mobile'}
            </p>
          )}
        </Mobile>
        <TabletAndDesktop>Only shown on tablet/desktop</TabletAndDesktop>
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
