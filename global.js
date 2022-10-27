import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Mulish", sans-serif;
    }

  body {
    padding-top: 80px;
    ${'' /* background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased; */}
    background: #4568dc; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #b06ab3,
        #4568dc
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #b06ab3,
        #4568dc
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-repeat: no-repeat;
  }

  body, input, textarea, button {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
  }

  button, a {
    color:black;
    cursor: pointer;
    text-decoration: none;
}

a {

        background: transparent;
        border-radius: 15px;
        transition: all 0.6s ease;
    }

    a:hover {
        color: black;
        padding:0.5rem;
        font-weight: bold;
        letter-spacing: 0.5px;
        background: #67b26f; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to right,
            #4ca2cd,
            #67b26f
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to right,
            #4ca2cd,
            #67b26f
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }`;