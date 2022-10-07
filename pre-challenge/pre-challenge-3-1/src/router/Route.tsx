import { ReactElement, useContext } from 'react';
import Context from '../context/Context';

type RouteProps = {
  path: string;
  component: ReactElement;
};

const Route = ({ path, component }: RouteProps) => {
  const { currentPath } = useContext(Context);

  return currentPath === path ? component : null;
};

export default Route;
