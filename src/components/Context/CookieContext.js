import React, { useState, createContext } from "react";

export const CookieContext = createContext();

export function CookieProvider(props) {
  const [hide, setHide] = useState(false);
  return (
    <CookieContext.Provider value={[hide, setHide]}>
      {props.children}
    </CookieContext.Provider>
  );
}