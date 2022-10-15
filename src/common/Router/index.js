import { Navigate, useRoutes } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import NotFound from '../../pages/NotFound';
import BidsPage from '../../pages/BidsPage';

const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/index', element: <Navigate to="/" /> },
    { path: '/bids/:bidsId', element: <BidsPage /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

export default Router;
