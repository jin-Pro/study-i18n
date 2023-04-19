import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { router } from './pages/router';

async function runMSW() {
  if (!import.meta.env.DEV) return;
  await import('@msw/.').then(({ worker }) => worker.start());
}

function render() {
  const queryClient = new QueryClient();
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}

(async () => {
  await Promise.all([runMSW()]);
  render();
})();
