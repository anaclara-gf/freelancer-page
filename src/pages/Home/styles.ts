import styled from "styled-components";

const Container = styled.div`
  background-color: lightgrey;
  height: 100%;
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin-top: 1em;
`;

const Body = styled.div`
  width: 90%;
  max-width: 900px;
`;

const BodyTitle = styled.p`
  font-size: 1.2em;
  font-style: italic;
`;

export { BodyTitle, Body, BodyContainer, CardContainer, Container };
