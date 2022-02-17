import { LoginPage, Register, Todos } from '..';

export const privateRoutes = [
  {
    path: '/todos',
    component: Todos,
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
