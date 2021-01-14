import React, { useState, createContext } from "react";

export const NavContext = createContext();

export function NavProvider(props) {
  const [logoSelect, setLogoSelect] = useState(1);
  return (
    <NavContext.Provider value={[logoSelect, setLogoSelect]}>
      {props.children}
    </NavContext.Provider>
  );
}
