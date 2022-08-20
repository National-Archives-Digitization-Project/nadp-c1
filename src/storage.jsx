import React, { useState, useEffect, createContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children, value }) => {
    return (
        <Context.Provider value={{ value }}>{children}</Context.Provider>
    )
}


export { ContextProvider, Context }