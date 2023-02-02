import React from "react";
import styled from "styled-components";
import {ReactComponent as Arrow} from '../assets/images/icon-arrow-right.svg'

const Button = ({children}) => {
  return <ButtonComponent>{children} <Arrow /></ButtonComponent>;
};

export default Button;

const ButtonComponent = styled.button`
  background: #a4ffaf;
  color: #24232c;
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  text-transform: uppercase;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border: 2px solid transparent;
  &:hover {
    border-color: #a4ffaf;
    background: transparent;
    color: #a4ffaf;
  }
  svg path{
    fill: #a4ffaf;
  }
`;
