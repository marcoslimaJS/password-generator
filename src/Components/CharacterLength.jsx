import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";
import Range from "./Range";

const CharacterLength = () => {
  const {characterLength} = useContext(GlobalContext);

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

const Container = styled.div``;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  text-transform: capitalize;
`;
const Length = styled.h2`
  color: #a4ffaf;
  font-size: 32px;
`;
