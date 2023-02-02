import { createContext, useState } from "react";
import styled from "styled-components";
import GeneratorForm from "./Components/GeneratorForm";
import ShowPassword from "./Components/ShowPassword";
import { GlobalStorage } from "./GlobalContext";
import useGeneratePassword from "./Hooks/useGeneratePassword";
import GlobalStyle from "./styles/Global";

const PasswordContext = createContext();
export const CharacterLengthContext = createContext();
export const IncludesPasswordContext = createContext();

function App() {
  //const [password, setPassword] = useState();

  return (
    <Container>
      <GlobalStyle />
      <GlobalStorage>
        <Title>Password Generator</Title>
        <ShowPassword />
        <GeneratorForm />
      </GlobalStorage>
    </Container>
  );
}

export default App;

const Container = styled.main`
  max-width: 540px;
  margin: auto;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #817d92;
  margin-bottom: 32px;
  text-align: center;
`;
