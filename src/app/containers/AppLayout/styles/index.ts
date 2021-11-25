import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;

  background: #ffffff;
  color: #333;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledNavigationItem = styled(Link).attrs((props: any) => ({
  to: props.to,
}))`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
`;

export const StyledContent = styled.main`
  background: orange;
  padding-top: 64px;
`;

export const StyledLink = styled(Link).attrs((props: any) => ({
  to: props.to,
}))`
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
`;
