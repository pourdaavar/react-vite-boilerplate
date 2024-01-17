import type { RouteObject } from 'react-router-dom';
import { Main } from '../../pages/Main';

export const AllRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
];
