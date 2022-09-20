import React, { useState } from "react";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});

export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken]= useState(initialToken);
    const isLoggedIn = !!token;
    const logInHandler=(token)=>{
        localStorage.setItem('token',token);
        setToken(token);
    }
    const logOutHandler= ()=>{
        localStorage.removeItem('token');
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