import { useSelector } from 'react-redux';

import { selectAuthenticationUserInfo } from '../Login/selectors';

const useHooks = () => {
  const userInfo = useSelector(selectAuthenticationUserInfo);

  return { handlers: {}, selectors: { userInfo } };
};

export default useHooks;
