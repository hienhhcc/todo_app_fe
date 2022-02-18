import styled from 'styled-components';

export const StyledTodoItem = styled.li.attrs((props: any) => ({
  status: props.status,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 0.25rem 1rem;
  background-color: ${(props) =>
    props.status === 'INPROGRESS' ? '#fff' : '#A7FB15'};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: auto;
  margin-bottom: 0.5rem;

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
