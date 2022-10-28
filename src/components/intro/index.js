import logo from "./../../images/logo.svg";
import { Logo, Container, Fundo } from "./styled";
import fundo from "./../../images/bg-header-desktop.png";
import {Botao} from "../botao";

export function Intro() {
  return (
    <div>
    <Fundo src={fundo} alt=""/>
    <Container>
      <Logo src={logo} alt="logotipo c" />
      <h1>A history of everything you copy</h1>
      <p>Clipboard allows you to track and organize everything you copy. Instantly <br/>access your clipboard on all your devices.</p>
      <Botao/>
    </Container>
    </div>
  );
}
