import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTodoItems } from '../selectors';
import { fetchTodosThunk } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoItems);

  //*Fetch todos của user
  useEffect(() => {
    dispatch(fetchTodosThunk({}));
  }, [dispatch]);

  return { handlers: {}, selectors: { todoItems } };
};

export default useHooks;
