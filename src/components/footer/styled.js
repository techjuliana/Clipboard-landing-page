import styled from "styled-components";

export const Container = styled.footer`
  background: #f5f6f8;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Redes = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  @media (max-width: 800px) {
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto;
  }
  img {
    margin: 5px;
  }
`;

export const Menu = styled.nav`
  ul {
    display: inline-block;
    list-style: none;
    margin: 10px;
    padding: 10px;
    @media (max-width: 800px) {
      flex-direction: column;
      margin: 2px;
      padding: 2px;
      display: block;
    }
  }

  li {
    padding: 13px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 4rem;
  @media (max-width: 800px) {
    margin-right: 0rem;
    margin-bottom: 1rem;
  }
`;
