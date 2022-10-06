import { ReactElement } from 'react';

type RouteProps = {
  path: string;
  component: ReactElement;
};

const Route = ({ path, component }: RouteProps) =>
  window.location.pathname === path ? component : null;

export default Route;
