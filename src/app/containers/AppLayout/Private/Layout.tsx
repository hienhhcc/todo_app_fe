import { memo } from 'react';
import { StyledContent } from '../styles';
import PrivateHeader from './Header';

interface Props {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: Props) => (
  <>
    <PrivateHeader />
    <StyledContent>{children}</StyledContent>
  </>
);

export default memo(PrivateLayout);
