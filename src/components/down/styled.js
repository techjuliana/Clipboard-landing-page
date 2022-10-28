import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
      margin: 1rem;
    }
  }
  p {
    margin: 2rem;
    text-align: center;
  }
`;
