import { Routes } from 'react-router';
import { PrivateLayout } from './Private/Layout';
import PrivateRoute from './Private/Route';
import { PublicLayout } from './Public/Layout';
import PublicRoute from './Public/Route';

import { privateRoutes, publicRoutes } from './route';

const AppLayout = () => (
  <>
    <h1>Hello</h1>
    <Routes>
      {publicRoutes.map((route) => (
        <PublicRoute
          key={route.key}
          path={route.path}
          component={route.component}
          layout={PublicLayout}
        />
      ))}
      {privateRoutes.map((route) => (
        <PrivateRoute
          key={route.key}
          path={route.path}
          component={route.component}
          layout={PrivateLayout}
        />
      ))}
    </Routes>
  </>
);

export default AppLayout;
