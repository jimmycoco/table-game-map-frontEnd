
import { useState } from "react";

const useInput = (validateValue) => {
    //設定input值
    const [enteredValue, setEnteredValue] = useState('');
    //設定input 是否被touched
    const [isTouched, setIsTouched] = useState(false);

    //透過傳入的validateValue(驗證函式)來檢驗當前輸入的值是否符合驗證，並取得對應的錯誤訊息
    const { isValid, errorMessage } = validateValue(enteredValue);

    //是否有錯誤
    const hasError = !isValid && isTouched;

    //change事件處理
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    //blur事件處理
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    //將以上的值return回去
    return {
        value: enteredValue,
        isValid,
        errorMessage,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    }
}


export default useInput;