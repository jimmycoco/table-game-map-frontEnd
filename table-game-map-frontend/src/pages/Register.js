import { useState } from "react";
import Card from "../components/UI/Card";
import "./Log.css"

const RegisterPage = (props) => {

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

        //呼叫註冊API
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
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">使用者名稱</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="請輸入使用者名稱"
                        value={username}
                        onBlur={handleUsernameInputBlur}
                        onChange={handleUsernameInputChange}
                        className={`inputbox ${usernameInputClasses}`}
                    />
                    {!usernameInputIsInValid || (
                        <p className="remind-word">使用者名稱為必填欄位</p>
                    )}

                </div>
                <div>
                    <label htmlFor="username">帳號</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="請輸入帳號"
                        value={username}
                        onBlur={handleUsernameInputBlur}
                        onChange={handleUsernameInputChange}
                        className={`inputbox ${usernameInputClasses}`}
                    />
                    {!usernameInputIsInValid || (
                        <p className="remind-word">帳號為必填欄位</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password">密碼</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="請輸入密碼"
                        value={password}
                        onBlur={handlePasswordInputBlur}
                        onChange={handlePasswordInputChange}
                        className={`inputbox ${passwordInputClasses}`}
                    />
                    {!passwordInputIsInValid || (
                        <p className="remind-word">密碼為必填欄位</p>
                    )}
                </div>

                <div>
                    <label htmlFor="checkPassword">確認密碼</label>
                    <input
                        id="checkPassword"
                        type="text"
                        placeholder="再次輸入密碼"
                        value={password}
                        onBlur={handlePasswordInputBlur}
                        onChange={handlePasswordInputChange}
                        className={`inputbox ${usernameInputClasses}`}
                    />
                    {!passwordInputIsInValid || (
                        <p className="remind-word">確認密碼為必填欄位</p>
                    )}
                </div>

                <button className="register-button">
                    註冊
                </button>

            </form>
        </Card >
    );
}

export default RegisterPage;