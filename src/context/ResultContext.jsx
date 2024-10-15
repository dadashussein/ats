import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState([]);

    return (
        <ResultContext.Provider value={{ result, setResult }}>
            {children}
        </ResultContext.Provider>
    )
}


const useResult = () => {
    const context = useContext(ResultContext);
    if (!context) {
        throw new Error('useResult must be used within a ResultProvider');
    }
    return context;
}

export default useResult;