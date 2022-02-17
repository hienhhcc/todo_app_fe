import styled from 'styled-components';

export const StyledForm = styled.form.attrs((props: any) => ({
  onSubmit: props.onSubmit,
}))`
  margin-top: 1rem;
  margin: auto;
  text-align: center;

  .input {
    padding: 0.25rem 0.5rem;
    border: 1px solid salmon;
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }
`;

export const StyledAddTodoButton = styled.button.attrs((props: any) => ({
  type: props.type,
}))`
  display: inline-block;
  border: none;
  color: #fff;
  padding: 0.25rem 0.5rem;
  background-color: salmon;
  text-align: center;
  font: inherit;
  
  &:hover {
    cursor: pointer;
    background-color: lightsalmon;
  }
`;
