import { Avatar, Container, Stack } from '@mui/material';

import { StyledHeader, StyledLink, StyledNavigationItem } from '../../styles';
import useHooks from './hooks';

const Header = () => {
  const { handlers, selectors } = useHooks();

  const { isAuthenticated } = selectors;

  return (
    <StyledHeader>
      <Container maxWidth="lg" className="height">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className="height"
        >
          <StyledLink to="/">
            <Stack
              direction="row"
              spacing="2"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                alt="Todo Logo"
                src="../../../../assets/img/Logo-Design-Todo.png"
              />
              <span className="span">My Todo</span>
            </Stack>
          </StyledLink>
          <div>
            <Stack direction="row" spacing="2">
              {!isAuthenticated ? (
                <>
                  <StyledNavigationItem to="/login">Login</StyledNavigationItem>
                  <StyledNavigationItem to="/register">
                    Register
                  </StyledNavigationItem>
                </>
              ) : (
                <>
                  <StyledNavigationItem to="/">Home</StyledNavigationItem>
                  <StyledNavigationItem to="/todos">Todos</StyledNavigationItem>
                </>
              )}
            </Stack>
          </div>
        </Stack>
      </Container>
    </StyledHeader>
  );
};

export default Header;
