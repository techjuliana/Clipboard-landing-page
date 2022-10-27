import styled from "styled-components";

export const Container = styled.header`
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .menu {
        text-align: center;
        margin-top: 1rem;
    }
    .menu ul li {
        display: inline-block;
    }
    .menu ul li a {
        display: block;
        color: black;
        font-weight: bold;
        padding: 3px 50px;
    }
`;
export const Logo = styled.img`
    width: 70px;
    height: 70px;
    padding-right: 1rem;
`;
