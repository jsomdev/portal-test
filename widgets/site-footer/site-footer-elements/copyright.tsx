import { ITextStyles, Stack, Text, useTheme } from '@fluentui/react';
import { FC } from 'react';

const messages = {
  copywrite: `© ${new Date().getFullYear()} Spraying Systems Co.`,
  reserved: 'All Rights Reserved',
  office: 'U.S. Corporate Office',
  address: '200 West North Avenue',
  city: 'Glendale Heights, IL',
  zipCode: '60139-3408',
  country: 'United States',
  phone: 'Phone: +1 630.665.5000'
};

export const Copyright: FC = () => {
  const { palette } = useTheme();

  const style: ITextStyles = {
    root: {
      color: palette.white
      //textAlign: shouldMobileOptimize ? 'center' : 'left'
    }
  };
  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <Stack.Item shrink grow>
        <Text styles={style} block>
          {messages.copywrite}
        </Text>
        <Text styles={style} block>
          {messages.reserved}
        </Text>
      </Stack.Item>
      <Stack.Item shrink grow>
        <Text styles={style} block>
          <b>{messages.office}</b>
        </Text>
        <Text styles={style} block>
          {messages.address}
        </Text>
        <Text styles={style} block>
          {messages.city}
        </Text>
        <Text styles={style} block>
          {messages.zipCode}
        </Text>
        <Text styles={style} block>
          {messages.country}
        </Text>
        <Text styles={style} block>
          {messages.phone}
        </Text>
      </Stack.Item>
    </Stack>
  );
};
