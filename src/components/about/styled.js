import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  @media (max-width: 800px) {
    margin-bottom: 0rem;
    justify-content: center;
    align-items: center;
    h1,
    h3,
    p {
      text-align: center;
    }
  }
`;

export const Paragrafo = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  text-align: center;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Sobre = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 1rem;
    justify-content: center;
  }
`;

export const Listagem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 7rem;
  @media (max-width: 800px) {
    align-items: center;
    margin-top: 2rem;
  }
  p {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 800px) {
    margin-left: 0rem;
  }
`;

export const Pc = styled.img`
  width: 600px;
  height: 500px;
  object-fit: cover;
  object-position: right;
  display: flex;
  @media (max-width: 800px) {
    width: 300px;
    height: 200px;
    margin: auto;
    display: block;
    display: flex;
    text-align: center;
    object-fit: fill;
  }
`;

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
