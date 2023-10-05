/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren } from 'react';

const DefaultRootPath = ({ children }: PropsWithChildren) => {
  const defaultLanguage = window.location.pathname.split('/')[1];
  if (defaultLanguage === '') {
    window.location.replace('ko');
    return null;
  }
  return <>{children}</>;
};

export default DefaultRootPath;
