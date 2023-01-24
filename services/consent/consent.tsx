import React from 'react';

import Script from 'next/script';

export const Consent: React.FC = () => {
  return (
    <>
      <Script async src="/klaro-config.js" />
      <Script async src="/klaro-init.js" />
      <Script
        async
        type="text/javascript"
        src="https://cdn.kiprotect.com/klaro/v0.7.2/klaro-no-css.js"
      />
      <Script
        async
        type="text/plain"
        data-type="application/javascript"
        data-name="GTM"
        id="GTM"
      >{`(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-MF4KBKB');`}</Script>
    </>
  );
};
