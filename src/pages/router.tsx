import { createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <div>hi</div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <div>zmzmzmzmzm</div>,
      },
    ],
  },
]);
