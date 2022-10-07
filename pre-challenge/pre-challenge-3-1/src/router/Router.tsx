import React, { useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';
import Context from '../context/Context';

type ChildrenProps = {
  children: ReactNode;
};

const Router = ({ children }: ChildrenProps) => {
  const { pathname } = window.location;

  const [currentPath, setCurrentPath] = useState(pathname);

  window.addEventListener('popstate', () => setCurrentPath(pathname));

  return (
    <Context.Provider value={{ currentPath, pathChange: setCurrentPath }}>
      {children}
    </Context.Provider>
  );
};

export default Router;
