import React, {useRef, useEffect, useContext} from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";

const Range = () => {
  const inp = useRef();
  const {characterLength, setCharacterLength} = useContext(GlobalContext);

  const handleChange = ({target}) => {
    setCharacterLength((characterLength) => characterLength = target.value)
  }

  // BARRA DE PROGRESSO DO INPUT RANGE
  const handleInput = (inputElement) => {
    let isChanging = false;

    const setCSSProperty = () => {
      const percent =
        ((inputElement.value - inputElement.min) /
          (inputElement.max - inputElement.min)) *
        100;
      inputElement.style.setProperty("--webkitProgressPercent", `${percent}%`);
    };

    // Set event listeners
    const handleMove = () => {
      if (!isChanging) return;
      setCSSProperty();
    };
    const handleUpAndLeave = () => (isChanging = false);
    const handleDown = () => (isChanging = true);

    inputElement.addEventListener("mousemove", handleMove);
    inputElement.addEventListener("mousedown", handleDown);
    inputElement.addEventListener("mouseup", handleUpAndLeave);
    inputElement.addEventListener("mouseleave", handleUpAndLeave);
    inputElement.addEventListener("click", setCSSProperty);

    // Init input
    setCSSProperty();
  };

  useEffect(() => {
    handleInput(inp.current);
  });

  return (
    <InputRange
      ref={inp}
      type="range"
      name=""
      id=""
      max={20}
      onChange={handleChange}
      value={characterLength}
    />
  );
};

export default Range;


const InputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #18171f;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    top: -10px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #e6e5ea;
    background: #e6e5ea;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #e6e5ea;
    background: #e6e5ea;
    cursor: pointer;
  }
  &::-webkit-slider-thumb:hover {
    background: #18171f;
    border-color: #a4ffaf;
    transition: 0.2s ease-in-out;
  }
  &::-moz-range-thumb:hover {
    background: #18171f;
    border-color: #a4ffaf;
    transition: 0.2s ease-in-out;
  }
  &::-moz-range-progress {
    background: #a4ffaf;
    height: 8px;
  }
  &::-ms-fill-lower {
    background: #a4ffaf;
    height: 8px;
  }
  & {
    --webkitProgressPercent: 0%;
  }
  &::-webkit-slider-runnable-track {
    height: 8px;
    background-image: linear-gradient(
      90deg,
      #a4ffaf var(--webkitProgressPercent),
      #18171f var(--webkitProgressPercent)
    );
  }
`;
