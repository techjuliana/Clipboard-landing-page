import devices from "./../../images/image-devices.png";
import { Container, Devices } from "./styled";

export function Access() {
  return (
    <Container>
      <h1>Access Clipboard anywhere</h1>
      <p>
        Whether you're on the go. or at your computer, you can access all your
        Clipboard <br />
        snippets in a few simple clicks
      </p>
      <Devices src={devices} alt="Computador" />
    </Container>
  );
}
