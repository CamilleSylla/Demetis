import React, { useState, createContext } from "react";

export const ActiveCardContext = createContext();

export function ActiveCardProvider(props) {
  const [active, setActive] = useState("FISCALITE");
  return (
    <ActiveCardContext.Provider value={[active, setActive]}>
      {props.children}
    </ActiveCardContext.Provider>
  );
}