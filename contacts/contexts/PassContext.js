import React, { createContext, useContext, useState } from 'react';

const PassContext = createContext();

export function usePassContext() {
    return useContext(PassContext);
}

export function PassContextProvider({ children }) {
    const [isPass, setIsPass] = useState({ pass: false, message: '' });

    return (
        <PassContext.Provider value={{ isPass, setIsPass }}>
            {children}
        </PassContext.Provider>
    );
}
