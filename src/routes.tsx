// src/routes.tsx
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';
import PrivateRoute from './components/PrivateRoute';

export const routes = [
  { path: '/login', component: <LoginPage /> },
  { path: '/register', component: <RegisterPage /> },
  { path: '/account', component: <PrivateRoute element={<AccountPage />} path={''} /> },
];
