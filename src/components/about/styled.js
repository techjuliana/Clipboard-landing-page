import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  .texto-titulo{
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
    p {
      padding-top: 1rem;
      padding-bottom: 4rem;
    }
  }

  .canto {
    display: flex;
    flex-direction: row;
  }
`;

export const Pc = styled.img`
  width: 600px;
  height: 500px;
  object-fit: cover;
    object-position: right;
  display: flex;
  /* align-items: flex-start; */
`;
