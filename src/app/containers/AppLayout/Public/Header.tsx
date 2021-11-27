import { Avatar, Container, Stack } from '@mui/material';

import { StyledHeader, StyledLink, StyledNavigationItem } from '../styles';

const PublicHeader = () => {
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
