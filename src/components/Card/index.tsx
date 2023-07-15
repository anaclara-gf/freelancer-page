import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  Image,
  TextContainer,
  CardTitle,
  CardSubtitle,
  CardText,
  Gradient,
} from "./styles";

const Card = (freelancer: Freelancer): JSX.Element => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate(`/profile/${freelancer.id}`);
      }}
    >
      <Image src={freelancer.imageURL} alt="profile" />
      <TextContainer>
        <CardTitle>{freelancer.name}</CardTitle>
        <CardSubtitle>{freelancer.level}</CardSubtitle>
        <CardText>{freelancer.about}</CardText>
        <Gradient />
      </TextContainer>
    </CardContainer>
  );
};

export { Card };
