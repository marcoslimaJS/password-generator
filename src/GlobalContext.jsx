import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [characterLength, setCharacterLength] = useState(0);
  const [includePassword, setIncludePassword] = useState([]);
  const [password, setPassword] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        characterLength: characterLength,
        setCharacterLength: setCharacterLength,
        includePassword: includePassword,
        setIncludePassword: setIncludePassword,
        password: password,
        setPassword: setPassword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
