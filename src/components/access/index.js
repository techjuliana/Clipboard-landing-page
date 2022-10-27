import devices from "./../../images/image-devices.png";
import { Container, Devices } from "./styled";

export function Access() {
  return (
    <Container>
     <h1>Access Clipboard anywhere</h1>
      <p>texto aqui</p>
      <Devices src={devices} alt="Computador" />
    </Container>
  );
}