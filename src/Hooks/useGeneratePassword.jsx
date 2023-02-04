import React from "react";

const options = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: ".+-[]*~_@#:?",
};

const useGeneratePassword = (includes, size) => {
  let password = "";
  let types = [...includes];

  const generateRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
  };

  const getCharacter = (opt) => {
    if (opt) {
      const type = options[opt];
      const randomNumber = generateRandomNumber(type.length);
      const character = type[randomNumber];
      return character;
    } else {
      return "";
    }
  };

  const generateRandomType = () => {
    const randomNumber = generateRandomNumber(types.length);
    if (!types.length) {
      types = includes;
    }
    const currentType = types[randomNumber];
    const updatedTypes = types.filter((type) => type !== currentType);
    types = updatedTypes;
    return currentType;
  };

  if (includes.length) {
    for (let i = 0; i < size; i++) {
      const currentType = generateRandomType();
      const currentCharacter = getCharacter(currentType);
      password += currentCharacter;
    }
  }

  return {
    password,
  };
};

export default useGeneratePassword;
