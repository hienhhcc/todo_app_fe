import { Route, Navigate } from 'react-router';

interface Props {
  component: any;
  layout: any;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: Props) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <Route
        element={
          <Layout>
            <Component />
          </Layout>
        }
        {...rest}
      />
    );
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
