import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

//自訂hook useAuth，用來回傳當前的Context值，，方便在其他元件中使用
const useAuth = () => {
    return useContext(AuthContext);
};

//透過AuthContext.Provider提供一個context的值給它的子元件。
//{ children }是它的子元件。透過value prop將認證狀態（isLoggedIn）和改變狀態的函數（setIsLoggedIn）傳遞給所有的子元件。
const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { useAuth };
export default AuthProvider;
