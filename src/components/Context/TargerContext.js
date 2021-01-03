import React, { useState, createContext, useEffect } from 'react';

export const TargetContext = createContext();

export function TargetProvider(props) {
    const [menu, setMenu] = useState({
        target: null,
      })
    return (
        <TargetContext.Provider value={[menu, setMenu]}>
            {props.children}
        </TargetContext.Provider>
    );
}