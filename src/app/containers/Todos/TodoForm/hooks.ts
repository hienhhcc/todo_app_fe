import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectTodoError,
  selectTodoItems,
  selectAddTodoStatus,
} from '../selectors';
import { addTodoThunk } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectTodoError);
  const addStatus = useSelector(selectAddTodoStatus);
  const items = useSelector(selectTodoItems);

  const onSubmitAddTodo = useCallback(
    async (data) => {
      const { todo } = data;

      //TODO Gọi api add todo
      dispatch(addTodoThunk(todo));
    },
    [dispatch]
  );

  return {
    handlers: { onSubmitAddTodo },
    selectors: { error, addStatus, items },
  };
};

export default useHooks;
