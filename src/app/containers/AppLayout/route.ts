import { LoginPage, Register, TodoList } from '..';

export const privateRoutes = [
  {
    path: '/todos',
    component: TodoList,
    key: 'profile',
  },
];

export const publicRoutes = [
  {
    path: '/login',
    component: LoginPage,
    key: 'login',
  },
  {
    path: '/register',
    component: Register,
    key: 'register',
  },
];
