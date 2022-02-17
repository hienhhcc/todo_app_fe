import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../Login/selectors';

const useHooks = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return {
    handlers: {},
    selectors: {
      isAuthenticated,
    },
  };
};

export default useHooks;
