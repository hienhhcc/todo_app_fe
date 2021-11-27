import { Route, Routes } from 'react-router';
import { LoginPage, Register, TodoList } from '..';

import { PrivateLayout } from './Private/Layout';
import { PublicLayout } from './Public/Layout';

const AppLayout = () => (
  <>
    <Routes>
      <Route
        path="/login"
        element={
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        }
      />
      <Route
        path="/register"
        element={
          <PublicLayout>
            <Register />
          </PublicLayout>
        }
      />
      <Route
        path="/todos"
        element={
          <PrivateLayout>
            <TodoList />
          </PrivateLayout>
        }
      />
    </Routes>
    {/* <Routes>
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
    </Routes> */}
  </>
);

export default AppLayout;
