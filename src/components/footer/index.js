import logo from "./../../images/logo.svg";
import facebook from "./../../images/icon-facebook.svg";
import instagram from "./../../images/icon-instagram.svg";
import twitter from "./../../images/icon-twitter.svg";
import { Logo, Container, Redes, Menu } from "./styled";

export function Footer() {
  return (
    <Container>
      <Menu>
        <Logo src={logo} alt="logotipo C" />
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
      </Menu>
      <Redes>
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={instagram} alt="instagram" />
        </li>
      </Redes>
    </Container>
  );
}
