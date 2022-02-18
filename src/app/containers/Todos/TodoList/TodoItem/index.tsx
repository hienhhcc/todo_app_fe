import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { StyledTodoItem } from './styles';
import useHooks from './hooks';

const TodoItem = (props: any) => {
  const { item } = props;

  const { handlers } = useHooks();
  const { onCheckCompleteTodo, onDeleteTodo } = handlers;

  return (
    <StyledTodoItem status={item.status}>
      <div>{item.content}</div>
      <div className="actions">
        <IconButton
          aria-label="delete"
          onClick={() => {
            onCheckCompleteTodo(item._id);
          }}
        >
          <CheckIcon style={{ color: 'green' }} />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            onDeleteTodo(item._id);
          }}
        >
          <DeleteIcon style={{ color: 'red' }} />
        </IconButton>
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
