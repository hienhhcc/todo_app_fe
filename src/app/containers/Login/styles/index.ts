import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: auto;
  padding: 1rem;
  width: 350px;
  background: #fff;
  color: #333333;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 3rem;
  overflow: hidden;

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const StyledForm = styled.form.attrs((props: any) => ({
  onSubmit: props.onSubmit,
}))`
  margin-top: 1rem;
`;

export const StyledInput = styled.div`
  position: relative;
  width: 100%;

  & ~ & {
    margin-top: 0.5rem;
  }

  .icon {
    position: absolute;
    left: 0.25rem;
    top: 0;

    height: 100%;
    width: 1.5rem;
  }

  .input {
    padding: 0.75rem;
    padding-left: 2.5rem;
    width: 100%;
    font: inherit;
    border: none;
    background: #d3d3d3;
    border-radius: 2px;

    &:focus {
      outline: none;
    }
  }
`;
