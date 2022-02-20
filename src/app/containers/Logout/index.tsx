import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { logout } from '../Login/slice';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('here');
    dispatch(logout({}));
  }, [dispatch]);

  return <Navigate to="/"></Navigate>;
};

export default Logout;
