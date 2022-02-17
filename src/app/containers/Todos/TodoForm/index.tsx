import { useForm } from 'react-hook-form';

import { StyledForm, StyledAddTodoButton } from './styles';

const TodoForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitAddTodo = () => {};

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitAddTodo)}>
      <input
        type="text"
        className="input"
        placeholder="Username"
        {...register('username')}
      />
      <StyledAddTodoButton type="submit">Add Todo</StyledAddTodoButton>
    </StyledForm>
  );
};

export default TodoForm;
