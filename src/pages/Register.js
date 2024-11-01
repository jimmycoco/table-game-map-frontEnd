import { Link, useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import "./Log.css"
import useInput from "../hooks/useInput";

const RegisterPage = (props) => {

    const navigate = useNavigate();

    const validateName = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '使用者名稱不能為空' };
        }
        return { isValid: true };
    };


    //帳號確認
    const validateUsername = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '帳號不能為空' };
        }
        return { isValid: true, errorMessage: '' };
    };

    //密碼確認
    const validatePassword = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '密碼不能為空' };
        }
        if (value.length < 6) {
            return { isValid: false, errorMessage: '密碼需要超過六個字' };
        }
        return { isValid: true, errorMessage: '' };
    };


    //密碼二次確認
    const validateConfirmPassword = (value) => {
        if (value.trim() === '') {
            return { isValid: false, errorMessage: '確認密碼不能為空' };
        }

        if (value !== password) {
            return { isValid: false, errorMessage: '和密碼不同' };
        }
        return { isValid: true, errorMessage: '' };
    };

    const {
        value: name,
        isValid: nameIsValid,
        errorMessage: nameErrorMessage,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput(validateName);

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

    const {
        value: confirmPassword,
        isValid: confirmPasswordIsValid,
        errorMessage: confirmPasswordErrorMessage,
        hasError: confirmPasswordInputHasError,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
    } = useInput(validateConfirmPassword);

    let formIsValid = false;

    if (nameIsValid && usernameIsValid && passwordIsValid && confirmPasswordIsValid) {
        formIsValid = true;
    }

    //處理送出表單
    const handleSubmit = (event) => {
        if (!formIsValid) return;

        event.preventDefault();

        //呼叫註冊API
    };

    const nameInputClasses = nameInputHasError
        ? "input-invalid"
        : "input-valid";

    const usernameInputClasses = usernameInputHasError
        ? "input-invalid"
        : "input-valid";
    const passwordInputClasses = passwordInputHasError
        ? "input-invalid"
        : "input-valid";

    const confirmPasswordInputClasses = confirmPasswordInputHasError
        ? "input-invalid"
        : "input-valid";

    return (
        <Card>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">使用者名稱</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="請輸入使用者名稱"
                        value={name}
                        onBlur={nameBlurHandler}
                        onChange={nameChangeHandler}
                        className={`inputbox ${nameInputClasses}`}
                    />
                    {nameInputHasError && (
                        <p className="remind-word">{nameErrorMessage}</p>
                    )}

                </div>
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
                    {usernameInputHasError && (
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
                    {passwordInputHasError && (
                        <p className="remind-word">{passwordErrorMessage}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="confirmPassword">確認密碼</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="再次輸入密碼"
                        value={confirmPassword}
                        onBlur={confirmPasswordBlurHandler}
                        onChange={confirmPasswordChangeHandler}
                        className={`inputbox ${confirmPasswordInputClasses}`}
                    />
                    {confirmPasswordInputHasError && (
                        <p className="remind-word">{confirmPasswordErrorMessage}</p>
                    )}
                </div>

                <button className="register-button">
                    註冊
                </button>

                <div className="need-register">
                    <p style={{ color: 'gray' }}>已經有帳號了?</p>
                    <Link to="/login">
                        <p className="to-register">
                            登入
                        </p>
                    </Link>
                </div>
            </form>
        </Card >
    );
}

export default RegisterPage;