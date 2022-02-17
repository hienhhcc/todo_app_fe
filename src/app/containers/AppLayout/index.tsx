import { Route, Routes } from 'react-router';

import {
  LoginPage,
  Register,
  TodoList,
  Home,
  Layout,
  NotFound,
  Logout,
} from '..';
import useHooks from './hooks';

const AppLayout = () => {
  const { handlers, selectors } = useHooks();

  const { isAuthenticated } = selectors;

  let routes = (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );

  if (isAuthenticated) {
    routes = (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }

  return routes;
};

export default AppLayout;
