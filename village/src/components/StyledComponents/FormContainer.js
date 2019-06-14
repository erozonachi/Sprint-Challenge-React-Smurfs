import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
  max-width: 500px;
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    border-radius: .5em;
    box-shadow: 4px 4px 4px 4px #ccc;

    > input, > button {
      outline: none;
      width: 90%;
      padding: 1em;
      margin: 1em 0;
    }
    > input {
      border: 1px solid #aaa;
    }
    > button {
      border: none;
      font-size: 1.6rem;
      font-weight: bold;
      background-color: teal;
      color: white;
      cursor: pointer;
      &:last-of-type {
        background-color: #710000;
        display: ${props => props.showCancel? 'auto' : 'none'};
      }
    }
  }
`;

export default FormContainer;
