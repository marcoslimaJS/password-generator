import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../assets/images/icon-check.svg";

const Checkbox = ({ label, id, value, state, setState }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setState((state) => (state = [...state, target.value]));
    } else {
      setState((state) => state.filter((opt) => opt !== target.value));
    }
  };

  return (
    <Label htmlFor={id}>
      <Input
        type="checkbox"
        name={id}
        id={id}
        value={value}
        checked={state.includes(value)}
        onChange={handleChange}
      />
      <PseudoCheckbox>
        <span>
          <CheckIcon />
        </span>
      </PseudoCheckbox>
      <p>Include {label}</p>
    </Label>
  );
};

export default Checkbox;

const PseudoCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid #e6e5ea;
  background: transparent;
  span {
    display: none;
  }
`;

const Input = styled.input`
  display: none;
  & + div {
    cursor: pointer;
  }
  & + div:hover {
    border-color: #a4ffaf;
  }
  &:checked + div {
    background: #a4ffaf;
    border-color: #a4ffaf;
    span {
      display: initial;
      position: relative;
      top: 1px;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 24px;
  p {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    gap: 20px;
    font-size: 16px;
  }
  @media (max-width: 345px) {
    gap: 15px;
    font-size: 14px;
  }
`;
