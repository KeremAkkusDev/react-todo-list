import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState('dark');
    const values = {
        theme,
        setTheme
    }
    return (
    <ThemeContext.Provider value={values}>{children}
    </ThemeContext.Provider>
    );
}


export const useTheme = () => useContext(ThemeContext)