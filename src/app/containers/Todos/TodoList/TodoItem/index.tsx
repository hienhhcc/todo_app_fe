import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

import { StyledTodoItem } from './styles';
import useHooks from './hooks';

const TodoItem = (props: any) => {
  const { item } = props;

  const { handlers } = useHooks();
  const { onCheckCompleteTodo, onUnCheckCompleteTodo, onDeleteTodo } = handlers;

  return (
    <StyledTodoItem status={item.status}>
      <div>{item.content}</div>
      <div className="actions">
        {item.status !== 'COMPLETED' ? (
          <Tooltip title="Mark complete">
            <IconButton
              aria-label="mark-complete"
              onClick={() => {
                onCheckCompleteTodo(item._id);
              }}
            >
              <CheckIcon style={{ color: 'green' }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Mark incomplete">
            <IconButton
              aria-label="mark-incomplete"
              onClick={() => {
                onUnCheckCompleteTodo(item._id);
              }}
            >
              <DoNotDisturbAltIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            onClick={() => {
              onDeleteTodo(item._id);
            }}
          >
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        </Tooltip>
      </div>
    </StyledTodoItem>
  );
};

export default TodoItem;
