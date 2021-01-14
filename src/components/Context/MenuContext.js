import React, { useState, createContext } from "react";

export const MenuContext = createContext();

export function MenuProvider(props) {
  const [hide, setHide] = useState(true);
  return (
    <MenuContext.Provider value={[hide, setHide]}>
      {props.children}
    </MenuContext.Provider>
  );
}
