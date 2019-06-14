import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  nav {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 1em 0;
    background-color: #555;

    > a {
      text-decoration: underline;
      padding: 1em;
      color: white;
      &:link, &:visited {
        color: white;
      }
      &:hover {
        color: #ccc;
      }
    }
  }
`;

export default AppContainer;
