import React, { useState, createContext } from "react";

export const ContactContext = createContext();

export function ContactProvider(props) {
  const [subject, setSubject] = useState({
      value: ""
  });
  return (
    <ContactContext.Provider value={[subject, setSubject]}>
      {props.children}
    </ContactContext.Provider>
  );
}