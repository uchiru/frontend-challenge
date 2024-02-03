import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '#/pages/404/404';

enum AppRoutes {
    HOME = '/',
}

const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: <div>ggd</div>,
        errorElement: <ErrorPage />
    },
  
]);

export default router;
