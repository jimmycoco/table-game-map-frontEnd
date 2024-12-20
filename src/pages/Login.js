import { useState } from "react";
import Card from "../components/UI/Card";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/authContext";
import "./Log.css"
import useInput from "../hooks/useInput";
import api from "../api/api"

const LoginPage = (props) => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('');
    const { setIsLoggedIn } = useAuth();

    const validateUsername = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '帳號為必填欄位' };
        }
        return { isValid: true, errorMessage: '' };
    };

    const validatePassword = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '密碼為必填欄位' };
        }
        return { isValid: true, errorMessage: '' };
    };



    const {
        value: username,
        isValid: usernameIsValid,
        errorMessage: usernameErrorMessage,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
    } = useInput(validateUsername);

    const {
        value: password,
        isValid: passwordIsValid,
        errorMessage: passwordErrorMessage,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput(validatePassword);


    //表單的狀態
    let formIsValid = false;

    if (usernameIsValid && passwordIsValid) {
        formIsValid = true;
    }

    //處理送出表單
    const handleSubmit = (event) => {
        // 如果表單無效，不繼續執行後續動作
        if (!formIsValid) return;
        // 阻止預設的表單行為，改為以ajax提交請求
        event.preventDefault();
        // 建立使用者輸入的資料物件
        const userData = {
            username,
            password,
        };
        // 使用api發送post登入請求
        api
            .post("/auth/login", userData)
            .then((result) => {
                localStorage.setItem("user", JSON.stringify(result));
                setIsLoggedIn(true);
                navigate('/');
                window.location.reload();
            })
            .catch((err) => {
                setErrorMsg("登入失敗，請重新登入")
                alert(errorMsg)
                console.error(err);
            })
    };

    const handleLineLogin = () => {
        // 跳轉到 LINE 登入頁面
        window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=2006566313&redirect_uri=${encodeURIComponent('http://localhost:3500/api/auth/lineLogin')}&state=YOUR_STATE&scope=profile%20openid%20email`;
    };


    //根據usernameInput是否valid來顯示對應樣式 
    const usernameInputClasses = usernameInputHasError
        ? "input-invalid"
        : "input-valid";

    //根據passwordInput是否valid來顯示對應樣式 
    const passwordInputClasses = usernameInputHasError
        ? "input-invalid"
        : "input-valid";
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">帳號</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="請輸入帳號"
                        value={username}
                        onBlur={usernameBlurHandler}
                        onChange={usernameChangeHandler}
                        className={`inputbox ${usernameInputClasses}`}
                    />
                    {!usernameInputHasError || (
                        <p className="remind-word">{usernameErrorMessage}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password">密碼</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangeHandler}
                        className={`inputbox ${passwordInputClasses}`}
                    />
                    {!passwordInputHasError || (
                        <p className="remind-word">{passwordErrorMessage}</p>
                    )}
                </div>

                <button className="login-button">
                    登入
                </button>

                <div className="need-register">
                    <p style={{ color: 'gray' }}>沒有帳號?</p>
                    <Link to="/register">
                        <p className="to-register">
                            註冊
                        </p>
                    </Link>
                </div>

                <button type="button" className="line-login-button" onClick={handleLineLogin}>
                    使用 LINE 登入
                </button>

            </form>
        </Card >
    );
};

export default LoginPage;
