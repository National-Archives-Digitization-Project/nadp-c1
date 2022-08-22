import { createContext, useContext, useMemo, useState } from "react";
import axios from 'axios';

const AppContext = createContext();
export function AppWrapper({ children }) {
    const [store, setStore] = useState({});
    const contextValue = useMemo(() => {
        return [store, setStore];
    }, [store, setStore]);
    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}