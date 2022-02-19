import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  checkCompleteTodoThunk,
  unCheckCompleteTodoThunk,
  removeTodoThunk,
} from '../../slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const onCheckCompleteTodo = useCallback(
    (todoId) => {
      dispatch(checkCompleteTodoThunk(todoId));
    },
    [dispatch]
  );

  const onUnCheckCompleteTodo = useCallback(
    (todoId) => {
      dispatch(unCheckCompleteTodoThunk(todoId));
    },
    [dispatch]
  );

  const onDeleteTodo = useCallback(
    (todoId) => {
      dispatch(removeTodoThunk(todoId));
    },
    [dispatch]
  );

  return {
    handlers: { onCheckCompleteTodo, onUnCheckCompleteTodo, onDeleteTodo },
  };
};

export default useHooks;
