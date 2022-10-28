import styled from "styled-components";

export const Container = styled.footer`
  background: #f5f6f8;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem;

  ul {
    display: inline-block;
    list-style: none;
    margin: 10px;
    padding: 10px;
  }

  li {
    padding: 13px;
  }

  .redes-sociais {
    display: flex;
    flex-direction: row;
    img {
      margin: 5px;
    }
  }
`;
export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right:4rem;
`;
