import TodoItem from './TodoItem/index';

import { StyledTodoList } from './styles';
import useHooks from './hooks';

const TodoList = () => {
  const { handlers, selectors } = useHooks();

  const { todoItems } = selectors;

  return (
    <StyledTodoList>
      {todoItems.map((todoItem: { _id: string; content: string }) => (
        <TodoItem key={todoItem._id} item={todoItem} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
