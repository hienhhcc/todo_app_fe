import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { checkCompleteTodoThunk } from '../../slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const onCheckCompleteTodo = useCallback(
    (todoId) => {
      dispatch(checkCompleteTodoThunk(todoId));
    },
    [dispatch]
  );

  const onDeleteTodo = useCallback((todoId) => {}, []);

  return { handlers: { onCheckCompleteTodo, onDeleteTodo } };
};

export default useHooks;
