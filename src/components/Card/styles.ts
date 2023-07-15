import styled from "styled-components";

const CardContainer = styled.div`
  border: 0.05em solid silver;
  display: flex;
  flex-direction: row;
  padding: 1em;
  height: 12em;
  margin-bottom: 1em;
  border-radius: 1em;
  background-color: whitesmoke;
  width: 100%;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 1.5em 0 silver;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  height: 10em;
`;

const TextContainer = styled.div`
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardTitle = styled.p`
  font-weight: bold;
`;

const CardSubtitle = styled.p`
  font-style: italic;
  font-size: 0.9em;
`;

const CardText = styled.p`
  margin-top: 1em;
  max-height: 10em;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.9em;
`;

const Gradient = styled.div`
  width: 100%;
  height: 20%;
  background-image: linear-gradient(to top, whitesmoke 10%, transparent);
  position: absolute;
  bottom: -0.1em;
`;

export {
  CardContainer,
  Image,
  TextContainer,
  CardTitle,
  CardSubtitle,
  CardText,
  Gradient,
};
