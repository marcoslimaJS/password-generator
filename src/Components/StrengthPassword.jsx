import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";

const possibleStrength = {
  4: {
    text: "Strong",
    color: "#A4FFAF",
    lvl: 4
  },
  3: {
    text: "Medium!",
    color: "#F8CD65",
    lvl: 3
  },
  2: {
    text: "Weak!",
    color: "#FB7C58",
    lvl: 2
  },
  1: {
    text: "Too Weak!",
    color: "#F64A4A",
    lvl: 1
  },
};

const strengthBar = ['tooWeak',  'weak', 'medium', 'strong']

const StrengthPassword = () => {
  const { characterLength, includePassword } = useContext(GlobalContext);
  const [force, setForce] = useState({text: '', color: ''})

  console.log(characterLength, includePassword);


  useEffect(() => {
    let strength;
    const optLength = includePassword.length;
    if (optLength === 0 || characterLength === 0) return;
    strength = characterLength > 6 ? possibleStrength[optLength] : possibleStrength[2];
    if(optLength === 4 && characterLength > 4 && characterLength < 7){
      strength = possibleStrength[3]
    }
    if(optLength < 3 || characterLength < 4) strength = possibleStrength[1];
    console.log(strength);
    setForce(strength)
  }, [includePassword, characterLength]);

  return (
    <Container>
      <StrengthText>Strength</StrengthText>
      <PasswordStrength>
        <span>{force.text}</span>
        <PasswordStrengthBarContainer>
          {strengthBar.map((e, index) => {
            return (
              <PasswordStrengthBar key={e}  color={force.lvl > index ? force.color : ''}/>
            )
          })}
        </PasswordStrengthBarContainer>
      </PasswordStrength>
    </Container>
  );
};

export default StrengthPassword;

const Container = styled.div`
  background: #18171f;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StrengthText = styled.span`
  color: #817d92;
  text-transform: uppercase;
`;

const PasswordStrength = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    text-transform: uppercase;
    font-size: 24px;
  }
`;

const PasswordStrengthBarContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const PasswordStrengthBar = styled.div`
  width: 10px;
  height: 28px;
  border: 2px solid ${(props) => props.color};
  background: ${(props) => props.color};
`;
