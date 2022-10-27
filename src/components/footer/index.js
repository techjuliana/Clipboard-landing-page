import logo from "./../../images/logo.svg";
import { Logo, Container } from "./styled";

export function Footer() {
  return (
      <Container>
        <Logo src={logo} alt="logotipo C" />
        <nav class="menu">
                <ul>
                    <li>
                        <a href="/">FAQs</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                    </ul>

                    <ul>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/">Press Kit</a>
                    </li>
                    </ul>

                    <ul>
                    <li>
                        <a href="/">Install Guides</a>
                    </li>
                </ul>

                {/* <ul> //REDES SOCIAIS
                    <li>
                      <Logo src={logo} alt="logotipo C" />
                      <Logo src={logo} alt="logotipo C" />
                      <Logo src={logo} alt="logotipo C" />
                    </li>
                </ul> */}
                
            </nav>
      </Container>
  );
}
