import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;

  background: #ffffff;
  color: #333;
  width: 100%;
  height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .height {
    height: 100%;
  }

  .span {
    margin-left: 0.5rem;
  }
`;

export const StyledNavigationItem = styled(Link).attrs((props: any) => ({
  to: props.to,
}))`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;

  & ~ & {
    margin-left: 0.5rem;
  }

  &:hover {
    color: orange;
  }
`;

export const StyledContent = styled.main`
  height: 100%;
  width: 100%;
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
