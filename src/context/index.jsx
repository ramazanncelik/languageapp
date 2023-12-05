"use client"
import React, { createContext, useContext, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const { flashCards } = useSelector(state => state.flashCards);

    const data = useMemo(
        () => ({
            flashCards
        }),
        [flashCards]
    );

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}

export { AppContext, AppProvider, useAppContext };