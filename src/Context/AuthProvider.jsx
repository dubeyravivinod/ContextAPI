import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


const AuthProvider = ( { children } ) => {
    const [isLogedIn, setLogedIn] = useState(false);
    const [user, setUser] = useState('demo');
    console.log(isLogedIn);

    const setLoginTrue = bool => {
        setLogedIn(bool);
    }

    const setUserFun = user => {
        setUser(user)
    };

    const contextFunctions = {
        isLogedIn,
        user,
        setLoginTrue,
        setUserFun,
    }

    return <AuthContext.Provider value={contextFunctions}>
        { children }
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;