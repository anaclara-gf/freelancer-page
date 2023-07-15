import { Card, Header } from "../../components";
import {
  Body,
  BodyTitle,
  BodyContainer,
  Container,
  CardContainer,
} from "./styles";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const freelancers = useAppSelector((state) => state.data.freelancers);
  const searchInput = useAppSelector((state) => state.data.searchInput);

  return (
    <Container>
      <Header />
      <BodyContainer>
        <Body>
          <BodyTitle>Profissionais disponíveis</BodyTitle>
          {searchInput && <p>Você procurou por: "{searchInput}"</p>}
          <CardContainer>
            {freelancers.length ? (
              freelancers.map((freelancer: Freelancer) => (
                <Card key={freelancer.id} {...freelancer} />
              ))
            ) : (
              <p>Não há profissionais com esse nome!</p>
            )}
          </CardContainer>
        </Body>
      </BodyContainer>
    </Container>
  );
}

export { Home };
