import { Outlet, createBrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';
import DefaultRootPath from '../hoc/DefaultRootPath';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DefaultRootPath>
        <Outlet />
      </DefaultRootPath>
    ),
    children: [
      {
        path: '/:root',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <MainPage />,
          },
        ],
      },
    ],
  },
]);
