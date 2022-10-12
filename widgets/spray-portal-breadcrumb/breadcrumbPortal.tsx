import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

const BreadcrumbPortal: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        children,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.querySelector('#breadcrumb-portal')!
      )
    : null;
};

export default BreadcrumbPortal;
