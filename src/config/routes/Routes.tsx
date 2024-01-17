import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AllRoutes } from './AllRoutes';

export const Routes = () => {
  const router = createBrowserRouter(AllRoutes);

  return <RouterProvider router={router} />;
};
