import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CopySvg } from "../assets/images/icon-copy.svg";
import { GlobalContext } from "../GlobalContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShowPassword = () => {
  const { password } = useContext(GlobalContext);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const copyToBoard = () => {
    if (password.length) {
      setCopiedMessage(true);
      setTimeout(() => {
        setCopiedMessage(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Text>{password ? <p>{password}</p> : <span>P4$5W0rD!</span>}</Text>
      <CopyToClipboard text={password} onCopy={copyToBoard}>
        <CopySvg />
      </CopyToClipboard>
      <Copied visible={copiedMessage}>Copied to Clipboard</Copied>
    </Container>
  );
};

export default ShowPassword;

const Container = styled.div`
  background: #24232c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  margin-bottom: 32px;
  position: relative;
  svg {
    cursor: pointer;
  }
  svg:hover path {
    fill: #fff;
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 500px) {
    padding: 16px;
  }
`;
const Text = styled.span`
  color: #e6e5ea;
  font-size: 32px;
  span {
    mix-blend-mode: normal;
    opacity: 0.25;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Copied = styled.div`
  display: ${(props) => (props.visible ? "inline-block" : "none")};
  position: absolute;
  right: 10px;
  bottom: -35px;
  z-index: 100;
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 20px;
  background: #a4ffaf;
  color: #24232c;
  border-radius: 5px;
  animation: anime 0.3s;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    right: 25px;
    top: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #a4ffaf;
  }
  @keyframes anime {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @media (max-width: 500px) {
    padding: 10px 20px;
    font-size: 16px;
    &::before {
      right: 8px;
    }
  }
`;
