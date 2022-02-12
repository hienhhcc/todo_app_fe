import { Link } from 'react-router-dom';

import { StyledDiv } from './styles';

const Home = () => {
  let isAuthenticated = false;

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
