import { Card, Header } from "../../components";
import {
  Body,
  BodyTitle,
  BodyContainer,
  Container,
  CardContainer,
} from "./styles";
import data from "../../data/freelancers.json";

function Home() {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <Body>
          <BodyTitle>Profissionais disponíveis</BodyTitle>
          <CardContainer>
            {data.freelancers.map((freelancer: Freelancer) => (
              <Card key={freelancer.id} {...freelancer} />
            ))}
          </CardContainer>
        </Body>
      </BodyContainer>
    </Container>
  );
}

export { Home };
