import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";
import useGeneratePassword from "../Hooks/useGeneratePassword";
import Button from "./Button";
import CharacterLength from "./CharacterLength";
import Checkbox from "./Checkbox";
import StrengthPassword from "./StrengthPassword";

const includesPassword = [
  {
    text: "Uppercase Letters",
    func: "uppercase",
    id: 1,
  },
  {
    text: "Lowercase Letters",
    func: "lowercase",
    id: 2,
  },
  {
    text: "Numbers",
    func: "numbers",
    id: 3,
  },
  {
    text: "Symbols",
    func: "symbols",
    id: 4,
  },
];

const GeneratorForm = () => {
  const { characterLength, includePassword, setIncludePassword, setPassword } =
    useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password } = useGeneratePassword(includePassword, characterLength);
    setPassword(password)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CharacterLength />
      <CheckboxContainer>
        {includesPassword.map(({ text, func, id }) => {
          return (
            <Checkbox
              key={id}
              label={text}
              id={id}
              value={func}
              state={includePassword}
              setState={setIncludePassword}
            />
          );
        })}
      </CheckboxContainer>
      <StrengthPassword />
      <Button>Generate</Button>
    </Form>
  );
};

export default GeneratorForm;

const Form = styled.form`
  background: #24232c;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 500px) {
    padding: 16px;
    gap: 16px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;
