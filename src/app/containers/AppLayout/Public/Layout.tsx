import { memo } from 'react';
import { StyledContent } from '../styles';
import PublicHeader from './Header';

interface Props {
  children?: React.ReactChild;
}

export const PublicLayout = ({ children }: Props) => (
  <>
    <PublicHeader />
    <StyledContent>{children}</StyledContent>
  </>
);

export default memo(PublicLayout);
