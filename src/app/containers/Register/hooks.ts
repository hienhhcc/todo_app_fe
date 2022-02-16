import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EActionStatus } from '../../../utils/constants';

import { selectRegisterError, selectRegisterStatus } from './selectors';
import { register } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectRegisterStatus);
  const error = useSelector(selectRegisterError);

  const onSubmitRegister = useCallback(
    async (data: any) => {
      console.log(data);

      const { username, password } = data;

      //TODO Gọi api register
      dispatch(register({ username, password }));
    },
    [dispatch]
  );

  //TODO Chuyển hướng người dùng về trang login nếu đăng ký thành công
  useEffect(() => {
    if (status === EActionStatus.SUCCESS) {
      navigate('/login', { state: { from: 'register' } });
    }
  }, [status, navigate]);

  return {
    handlers: { onSubmitRegister },
    selectors: { status, error },
  };
};

export default useHooks;
