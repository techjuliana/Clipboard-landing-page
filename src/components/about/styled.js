import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  margin-bottom: 7rem;
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
  display: flex;
  align-items: flex-start;
`;
