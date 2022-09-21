import React, { useState } from "react";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});

const calculateRemainingTime= (expirationTime)=>{
    const currentTime = new Date().getTime();
    const adjExpirationTime= new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;  
    return remainingDuration;
}

export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken]= useState(initialToken);
    const isLoggedIn = !!token;

    const logOutHandler= ()=>{
        localStorage.removeItem('token');
        setToken(null);
    }
    
    const logInHandler=(token, expirationTime)=>{

        localStorage.setItem('token',token);
        setToken(token);

        const remainingTime = calculateRemainingTime(expirationTime);
        setTimeout(logOutHandler, remainingTime);
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