import { Outlet, createBrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';
import SecondPage from './SecondPage';
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
          {
            path: 'second',
            element: <SecondPage />,
          },
        ],
      },
    ],
  },
]);
