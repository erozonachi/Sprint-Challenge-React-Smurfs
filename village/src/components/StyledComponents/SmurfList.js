import styled from 'styled-components';

const SmurfList = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > h1 {
      font-size: 2.4rem;
      font-weight: bolder;
      padding: .5em 0;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenly;
      width: 100%;
  }
`;

export default SmurfList;
