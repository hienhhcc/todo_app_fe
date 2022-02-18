import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import { Save } from '@mui/icons-material';

import { StyledForm, StyledAddTodoButton } from './styles';
import useHooks from './hooks';
import { EActionStatus } from '../../../../utils/constants';
import { useCallback } from 'react';
import { addTodoThunk } from '../slice';

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const { selectors } = useHooks();

  const { addStatus } = selectors;

  const onSubmitAddTodo = useCallback(
    async (data) => {
      const { todo } = data;

      //TODO Gọi api add todo
      dispatch(addTodoThunk(todo));
      reset({ todo: '' });
    },
    [dispatch, reset]
  );

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitAddTodo)}>
      <input
        type="text"
        className="input"
        placeholder="Add an item"
        {...register('todo')}
      />
      {addStatus === EActionStatus.PENDING ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Save />}
          variant="outlined"
          style={{
            display: 'inline-block',
            border: 'none',
            color: '#fff',
            padding: '0.25rem 0.5rem',
            backgroundColor: 'salmon',
            textAlign: 'center',
            font: 'inherit',
          }}
        >
          Adding...
        </LoadingButton>
      ) : (
        <StyledAddTodoButton type="submit">Add Todo</StyledAddTodoButton>
      )}
    </StyledForm>
  );
};

export default TodoForm;
