import { Helmet } from 'react-helmet-async';
import AppLayout from './app/containers/AppLayout';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <>
      <Helmet titleTemplate="%s - AT" defaultTitle="Hienhhcc Todo">
        <meta name="description" content="Todo application" />
      </Helmet>
      <AppLayout />
      <GlobalStyle />
    </>
  );
}

export default App;
