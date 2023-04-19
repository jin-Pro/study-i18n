import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hi</div>,
    children: [
      {
        path: '/',
        element: <div>zmzmzmzmzm</div>,
      },
    ],
  },
]);
