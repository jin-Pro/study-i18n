import { createBrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
