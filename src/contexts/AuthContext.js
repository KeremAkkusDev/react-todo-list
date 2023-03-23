import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const values = {
        isLoggedIn,
        setIsLoggedIn
    }
    return (
    <AuthContext.Provider value={values}>{children}
    </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext)