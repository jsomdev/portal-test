import { DefaultPalette, IStackStyles, Stack } from '@fluentui/react';
import { NextPage } from 'next';
import { Desktop, desktopCSS, Mobile } from '@widgets/media-queries';

const Responsive: NextPage = () => {
  const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
      flexDirection: 'column',
      ...desktopCSS({
        flexDirection: 'row'
      })
    }
  };
  return (
    <div>
      <Mobile>Mobile</Mobile>
      <Desktop>Desktop</Desktop>
      <br />
      <Stack styles={stackStyles}>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
      </Stack>
    </div>
  );
};
export default Responsive;
