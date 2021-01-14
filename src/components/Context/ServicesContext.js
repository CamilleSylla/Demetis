import React, { useState, createContext } from "react";

export const ServicesContext = createContext();

export function ServicesProvider(props) {
  const [show, setShow] = useState({
    component: 0,
    variant: null,
  });
  return (
    <ServicesContext.Provider value={[show, setShow]}>
      {props.children}
    </ServicesContext.Provider>
  );
}
