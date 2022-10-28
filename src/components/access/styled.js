import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
      margin:1rem;
    }}
  p {
    margin: 2rem;
    text-align: center;
    padding-bottom: 5rem;
    @media (max-width: 800px) {
      padding-bottom: 1rem;
    }
  }
`;

export const Devices = styled.img`
  width: 700px;
  height: 500px;
  @media (max-width: 800px) {
    width: 300px;
    height: 200px;
  }
`;
