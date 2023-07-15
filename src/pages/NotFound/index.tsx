import { Header } from "../../components";
import { Body, Container } from "./styles";

function NotFound() {
  return (
    <Container>
      <Header />
      <Body>
        <h1>Ooops!</h1>
        <p>Página não encontrada</p>
      </Body>
    </Container>
  );
}

export { NotFound };
