import styled from "styled-components";

const Container = styled.div`
  background-color: lightgrey;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 900px;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 1em;
  border: 0.05em solid silver;
  background-color: whitesmoke;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  margin-bottom: 1em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 1em;
  border: 0.05em solid silver;
  background-color: whitesmoke;
  margin-bottom: 1em;

  h1:first-child,
  h1:last-of-type {
    margin-top: 0em;
  }

  h1 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
`;

const Name = styled.p`
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-style: italic;
  font-size: 0.9em;
`;

const IconsContainer = styled.div`
  margin-top: 1rem;
  width: 4.2em;
  display: flex;
  justify-content: space-between;
`;

const LanguageTitle = styled.p`
  margin-top: 1em;
  font-weight: bold;
  font-size: 0.7em;
`;

const BorderTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const BorderText = styled.div`
  font-size: 0.7em;
  border: 0.05em solid silver;
  border-radius: 0.5em;
  background-color: lightgrey;
  padding: 0.3em 0.6em;
  margin: 0.5em 0.5em 0 0;
`;

const Button = styled.a`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: black;
  height: 2em;
  color: white;
  cursor: pointer;
  margin-top: 1em;

  :hover {
    background-color: dimgray;
  }
`;

const Text = styled.p`
  font-size: 0.8em;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 0.9em;
`;

const BoldGreyText = styled.p`
  color: dimgray;
  font-weight: bold;
  font-size: 0.9em;
`;

const ItalicText = styled.p`
  font-style: italic;
  font-size: 0.8em;
  margin-bottom: 0.7em;
`;

const SmallText = styled.p`
  font-size: 0.7em;
  margin-bottom: 1em;
`;

const JobsContainer = styled.div`
  margin-left: 1em;
`;

export {
  Container,
  Body,
  BodyContainer,
  ImageContainer,
  Image,
  TextContainer,
  Name,
  SubTitle,
  IconsContainer,
  LanguageTitle,
  BorderTextContainer,
  BorderText,
  Button,
  Text,
  BoldText,
  BoldGreyText,
  ItalicText,
  SmallText,
  JobsContainer,
};
