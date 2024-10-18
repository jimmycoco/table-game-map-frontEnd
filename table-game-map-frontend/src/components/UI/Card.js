import "./Card.css";

const Card = ({ children }) => {

    return <div className="login-out-container">
        <div className="sec-container">
            <div className="inner">
                <h1 className="login-out-word">桌遊地圖</h1>
            </div>
            {children}
        </div>
    </div>
}

export default Card;
