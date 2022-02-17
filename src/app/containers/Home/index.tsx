import { Link } from 'react-router-dom';
import useHooks from './hooks';

import { StyledDiv } from './styles';

const Home = () => {
  const { handlers, selectors } = useHooks();
  const {} = handlers;
  const { isAuthenticated } = selectors;

  let content = (
    <StyledDiv>
      <h1>Welcome</h1>
      <p>
        Please <Link to="/login">login</Link> to proceed the app
      </p>
    </StyledDiv>
  );

  if (isAuthenticated) {
    content = (
      <StyledDiv>
        <h1>Welcome</h1>
        <p>
          Let's plan <Link to="/todos">todos</Link>
        </p>
      </StyledDiv>
    );
  }

  return content;
};

export default Home;
