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
  .marcas {
    @media (max-width: 800px) {
      margin: 10rem;
    }
  }
  .listagem {
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 800px) {
      flex-direction: column;
    }

    p {
      padding-top: 1rem;
      padding-bottom: 4rem;
      text-align: center;
      @media (max-width: 800px) {
        padding-bottom: 2rem;
      }
    }

    .listagem-superior {
      text-align: center;
      margin: 2rem;
    }
  }
`;
