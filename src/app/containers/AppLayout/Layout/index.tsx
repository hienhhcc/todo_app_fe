import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledContent } from '../styles';
import Header from './Header/index';

interface Props {
  children?: React.ReactChild;
}

export const Layout = ({ children }: Props) => (
  <>
    <Header />
    <StyledContent>
      <Outlet />
    </StyledContent>
  </>
);

export default memo(Layout);
