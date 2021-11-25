import { Avatar, Container, Stack } from '@mui/material';

import { StyledHeader, StyledLink, StyledNavigationItem } from '../styles';

const PublicHeader = () => {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Stack justifyContent="space-between" alignItems="center">
          <StyledLink to="/">
            <Stack direction="row" spacing="2">
              <Avatar
                alt="Todo Logo"
                src="../../../../assets/img/Logo-Design-Todo.png"
              />
              <span>My Todo</span>
            </Stack>
          </StyledLink>
          <div>
            <Stack direction="row" spacing="2">
              <StyledNavigationItem to="/login">Login</StyledNavigationItem>
              <StyledNavigationItem to="/register">
                Register
              </StyledNavigationItem>
            </Stack>
          </div>
        </Stack>
      </Container>
    </StyledHeader>
  );
};

export default PublicHeader;
