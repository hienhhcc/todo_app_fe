import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EActionStatus } from '../../../utils/constants';
import {
  selectAuthenticationError,
  selectAuthenticationStatus,
  selectAuthenticationUserInfo,
  selectIsAuthenticated,
} from './selectors';
import { loginThunk, reset } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectAuthenticationStatus);
  const error = useSelector(selectAuthenticationError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userInfo = useSelector(selectAuthenticationUserInfo);

  const onSubmitLogin = useCallback(
    async (data) => {
      console.log(data);

      const { username, password } = data;

      //TODO Gọi api login
      dispatch(loginThunk({ username, password }));
    },
    [dispatch]
  );

  //* Reset state khi mount
  useEffect(() => {
    dispatch(reset({}));
  }, [dispatch]);

  //* Nếu đã đăng nhập thì chuyển hướng người dùng về home
  useEffect(() => {
    if (isAuthenticated || status === EActionStatus.SUCCESS) {
      navigate('/');
    }
  }, [navigate, isAuthenticated, status]);

  return {
    handlers: { onSubmitLogin },
    selectors: { status, error, isAuthenticated, userInfo },
  };
};

export default useHooks;
