import { createContext, useState } from "react";
import styled from "styled-components";
import GeneratorForm from "./Components/GeneratorForm";
import ShowPassword from "./Components/ShowPassword";
import { GlobalStorage } from "./GlobalContext";
import GlobalStyle from "./styles/Global";

function App() {
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
  @media (max-width: 500px) {
    padding: 32px 16px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #817d92;
  margin-bottom: 32px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;
