import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
      text-align: center; 
      margin:1rem;
    }
  }
  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
      margin:1rem;
    }
    
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 4rem;
`;

export const Fundo = styled.img`
  width: 100%;
  height: 12rem;
`;
