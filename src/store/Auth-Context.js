import React, { useState } from "react";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});

export const AuthContextProvider = (props)=>{
    const [token, setToken]= useState(null);
    const isLoggedIn = !!token;
    const logInHandler=(token)=>{
        setToken(token);
    }
    const logOutHandler= ()=>{
        setToken(null);
    }

    const contextValue={
        token: token,
        isLoggedIn: isLoggedIn,
        login: logInHandler,
        logout: logOutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;