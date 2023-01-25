import React from 'react';

import Script from 'next/script';

import { useTabletAndDesktop } from '@widgets/media-queries';

export const Chat: React.FC = () => {
  const isTabletAndDesktop = useTabletAndDesktop();
  if (!isTabletAndDesktop) {
    return null;
  }
  return null;
  // return (
  //   <Script
  //     id="Microsoft_Omnichannel_LCWidget"
  //     src="https://oc-cdn-ocprod.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js"
  //     data-app-id="1c4bfccd-5b69-49c1-b2c8-0a565602f269"
  //     data-lcw-version="prod"
  //     data-org-id="91ba7e06-97cb-4f86-b784-76e07c1645e7"
  //     data-org-url="https://unq91ba7e0697cb4f86b78476e07c164-crm.omnichannelengagementhub.com"
  //   ></Script>
  // );
};
