import { useState } from "react";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom"

const LoginPage = (props) => {
    //username欄位值
    const [username, setUsername] = useState("");
    //username touched值
    const [usernameTouched, setUsernameTouched] = useState(false);

    //password欄位值
    const [password, setPassword] = useState("");
    //password touched欄位值
    const [passwordTouched, setPasswordTouched] = useState(false);


    //username的檢核
    const usernameIsValid = username.trim() !== "";
    const usernameInputIsInValid = !usernameIsValid && usernameTouched;

    //password的檢核
    const passwordIsValid = password.trim() !== "";
    const passwordInputIsInValid = !passwordIsValid && passwordTouched;

    //表單的狀態
    let formIsValid = false;

    if (usernameIsValid && passwordIsValid) {
        formIsValid = true;
    }

    //當username input值變更時做的處理
    const handleUsernameInputChange = (event) => {
        setUsernameTouched(true);
        setUsername(event.target.value);
    };

    //當username input值blur時做的處理
    const handleUsernameInputBlur = (event) => {
        setUsernameTouched(true);
    };

    //當password input值變更時做的處理
    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
        setPasswordTouched(true);
    };

    //當password input值blur時做的處理
    const handlePasswordInputBlur = (event) => {
        setPasswordTouched(true);
    };

    //處理送出表單
    const handleSubmit = (event) => {
        if (!formIsValid) return;

        event.preventDefault();

        //呼叫登入API
    };

    //根據usernameInput是否valid來顯示對應樣式 
    const usernameInputClasses = usernameInputIsInValid
        ? "border-red-300 focus:ring-red-500"
        : "border-slate-300 focus:ring-sky-500";

    //根據passwordInput是否valid來顯示對應樣式 
    const passwordInputClasses = passwordInputIsInValid
        ? "border-red-300 focus:ring-red-500"
        : "border-slate-300 focus:ring-sky-500";

    return (
        <Card>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="custom-font">帳號</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="請輸入帳號"
                        value={username}
                        onBlur={handleUsernameInputBlur}
                        onChange={handleUsernameInputChange}
                        className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm
          shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1    
          ${usernameInputClasses}`}
                    />
                    {!usernameInputIsInValid || (
                        <p className="text-red-500 text-sm">帳號為必填欄位</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="custom-font">密碼</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="請輸入密碼"
                        value={password}
                        onBlur={handlePasswordInputBlur}
                        onChange={handlePasswordInputChange}
                        className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md text-sm
          shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1
          ${passwordInputClasses}`}
                    />
                    {!passwordInputIsInValid || (
                        <p className="text-red-500 text-sm">密碼為必填欄位</p>
                    )}
                </div>

                <button className="mt-8 px-4 py-2 bg-violet-600 hover:bg-violet-700  duration- 200 text-white w-full rounded cursor-pointer">
                    登入
                </button>

                <div className="flex justify-center text-sm py-4">
                    <p className="text-gray-400">沒有帳號?</p>
                    <Link to="/register">
                        <button className="ml-2 duration-200 text-violet-600 cursor-pointer">
                            註冊
                        </button>
                    </Link>
                </div>

            </form>
        </Card >
    );
};

export default LoginPage;
