import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";
import Range from "./Range";

const CharacterLength = () => {
  const { characterLength } = useContext(GlobalContext);

  return (
    <Container>
      <CharacterContainer>
        <span>character length</span>
        <Length>{characterLength}</Length>
      </CharacterContainer>
      <Range />
    </Container>
  );
};

export default CharacterLength;

const Container = styled.div`
  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  text-transform: capitalize;
  @media (max-width: 500px) {
    span {
      font-size: 16px;
    }
  }
`;
const Length = styled.h2`
  color: #a4ffaf;
  font-size: 32px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
