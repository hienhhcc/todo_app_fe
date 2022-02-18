import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { StyledHeader } from './styles';
import useHooks from './hooks';

const Todos = () => {
  const { handlers, selectors } = useHooks();

  const { userInfo } = selectors;

  return (
    <div>
      <StyledHeader>{userInfo.username}'s Todo List</StyledHeader>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
