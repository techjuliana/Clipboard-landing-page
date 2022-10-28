import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .texto-titulo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .texto {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  .listagem {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 7rem;
    @media (max-width: 800px) {
      align-items: center;
    }
    p {
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
    @media (max-width: 800px) {
      margin-left: 0rem;
    }
  }

  .canto {
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 1rem;
      justify-content: center;
    }
  }
`;

export const Pc = styled.img`
  width: 600px;
  height: 500px;
  object-fit: cover;
  object-position: right;
  display: flex;
  @media (max-width: 800px) {
    width: 320px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    object-fit: fill;
  }
`;
