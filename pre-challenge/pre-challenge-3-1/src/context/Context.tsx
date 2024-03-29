import React, { Dispatch, SetStateAction } from 'react';

export type contextPropsType = {
  currentPath: string;
  pathChange: Dispatch<SetStateAction<string>>;
};

const contextProps: contextPropsType = {
  currentPath: '/',
  pathChange: () => {},
};

const Context = React.createContext(contextProps);

export default Context;
