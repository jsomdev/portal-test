import React from 'react';

import { ErrorMessage } from '@components/errors/errorMessage';
import { NotFoundMessage } from '@components/errors/notFoundMessage';

function Error({ statusCode }: { statusCode: number }): React.ReactNode {
  if (statusCode === 404) {
    return <NotFoundMessage />;
  }
  return <ErrorMessage showLogo showHomepageLink />;
}

Error.getInitialProps = ({
  res,
  err
}: {
  res: { statusCode: number } | undefined;
  err: { statusCode: number } | undefined;
}) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 };
};

export default Error;
