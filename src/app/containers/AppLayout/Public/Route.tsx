import { Route } from 'react-router';

interface Props {
  component: any;
  layout: any;
  path: string;
}

const PublicRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: Props) => {
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
};

export default PublicRoute;
