import { useState, useEffect } from 'react';

function useIsLogged() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 從 localStorage 取得 user 資料
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                const token = parsedUser?.data?.token;
                if (token) {
                    setIsLoggedIn(true);
                    setUser(parsedUser.data);
                }
            } catch (error) {
                console.error("Failed to parse user data from localStorage:", error);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, []);  // 空依賴陣列確保只在初次渲染時執行
    console.log(isLoggedIn);
    return { isLoggedIn, user };
}

export default useIsLogged;