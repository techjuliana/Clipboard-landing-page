import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10rem;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 6rem;
  }
  .botao-verde {
    background-color: hsl(171, 66%, 44%);
    box-shadow: 5px 5px 4px hsl(171, 66%, 39%);
  }
  .botao-azul {
    background-color: hsl(233, 100%, 69%);
    box-shadow: 5px 5px 4px hsl(233, 100%, 65%);
  }

  button {
    color: white;
    font-weight: bold;
    margin: 10px;
    padding: 1rem;
    border-radius: 30px;
    width: 12rem;
    margin-bottom: 10rem;
    @media (max-width: 800px) {
      margin: 10px;
    }
  }
`;
