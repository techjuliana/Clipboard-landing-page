import logo from "../../assets/logo.svg";
import { Logo, Container } from "./styled";

export function Intro() {
  return (
      <Container>
        <Logo src={logo} alt="logotipo github" />
        <nav class="menu">
                <ul>
                    <li>
                        <a href="/">Download for IOS</a>
                        <a href="/">Download for MAC</a>
                    </li>
                </ul>
            </nav>
      </Container>
  );
}
