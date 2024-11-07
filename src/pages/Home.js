import "./Home.css"
import useIsLogged from "../hooks/useIsLogged";




const HomePage = props => {
    const { isLoggedIn, user } = useIsLogged();
    return <div className="homepage">
        <div className="slogan">
            <div className="large-text">「解放雙手」奔向桌遊!寶藏隨你們去找~~</div>
            {isLoggedIn
                ? (<div className="small-text">{user.name}，你已經踏上尋寶之路，接下來要去哪裡？</div>)
                : (<div className="small-text">準備好了嗎？寶藏就在前方，登入開始你的探險！</div>)
            }
        </div>
    </div>;

}
export default HomePage;