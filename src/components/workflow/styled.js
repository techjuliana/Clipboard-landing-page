import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  img {
    margin: 3rem;
  }
  .texto {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  .listagem {
    display: flex;
    justify-content: center;
    flex-direction: row;

    p {
      padding-top: 1rem;
      padding-bottom: 4rem;
      text-align: center;
    }

    .listagem-superior {
      text-align: center;
      margin: 2rem;
    }
  }
`;
