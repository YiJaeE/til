import React from 'react';
import { ReactNode } from 'react';
import useRouter from '../hooks/useRouter';

type ChildrenProps = {
  children: ReactNode;
};

const Router = ({ children }: ChildrenProps) => {
  const { pathChange } = useRouter();

  window.addEventListener('popstate', () =>
    pathChange(window.location.pathname)
  );

  return <>{children}</>;
};

export default Router;
