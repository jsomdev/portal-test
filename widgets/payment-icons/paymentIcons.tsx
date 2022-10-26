import React from 'react';

import { Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';

//TODO ward: use next/image?
export const PaymentIcons: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 4 }} verticalAlign="center">
      <Stack.Item>
        <img
          alt="visa"
          height={11}
          src={STATIC_IMAGES.checkout.paymentIcons.visaLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <img
          alt="master-card"
          height={12}
          src={STATIC_IMAGES.checkout.paymentIcons.masterCardLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <img
          alt="maestro"
          height={12}
          src={STATIC_IMAGES.checkout.paymentIcons.maestroCardLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <img
          alt="american-express"
          height={12}
          src={STATIC_IMAGES.checkout.paymentIcons.americanExpressLogo}
        />
      </Stack.Item>
    </Stack>
  );
};
