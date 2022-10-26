import React from 'react';

import Image from 'next/image';

import { Stack } from '@fluentui/react';
import { STATIC_IMAGES } from '@public/media/images';

export const PaymentIcons: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 4 }} verticalAlign="center">
      <Stack.Item>
        <Image
          layout="fixed"
          height="20"
          width="40"
          objectFit="contain"
          alt="visa"
          src={STATIC_IMAGES.checkout.paymentIcons.visaLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <Image
          layout="fixed"
          height="20"
          width="40"
          objectFit="contain"
          alt="master-card"
          src={STATIC_IMAGES.checkout.paymentIcons.masterCardLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <Image
          layout="fixed"
          height="20"
          width="40"
          objectFit="contain"
          alt="maestro"
          src={STATIC_IMAGES.checkout.paymentIcons.maestroCardLogo}
        />
      </Stack.Item>
      <Stack.Item>
        <Image
          layout="fixed"
          height="20"
          width="40"
          objectFit="contain"
          alt="american-express"
          src={STATIC_IMAGES.checkout.paymentIcons.americanExpressLogo}
        />
      </Stack.Item>
    </Stack>
  );
};
