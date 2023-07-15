import styled from "styled-components";

const Container = styled.div`
  background-color: lightgrey;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }
`;

export { Container, Body };
