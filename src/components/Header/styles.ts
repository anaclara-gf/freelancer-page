import styled from "styled-components";

const HeaderBackground = styled.div`
  width: 100%;
  height: 3em;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  color: white;
  font-size: 1.5em;
  cursor: pointer;
`;

const InputContainer = styled.form`
  display: flex;
  width: 250px;
`;

const Input = styled.input`
  height: 1.875em;
  padding-left: 0.5em;
  flex: 1;
  border: none;
  font-size: 0.8em;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 1.5em;
  width: 1.5em;
  margin-left: -1em;
  background-color: lightgray;
  border: none;
  cursor: pointer;
`;

export {
  HeaderBackground,
  HeaderContainer,
  Title,
  InputContainer,
  Input,
  Button,
};
