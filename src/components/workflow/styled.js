import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
      margin:1rem;
    }}
  img {
    margin: 2rem;
  }
  .texto {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    text-align: center;
  }
  .marcas {
    @media (max-width: 800px) {
      padding: 10rem;
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
        padding-bottom: 0rem;
      }
    }

    .listagem-superior {
      text-align: center;
      margin: 2rem;
      @media (max-width: 800px) {
        margin: 1rem;
      }
    }
  }
`;
