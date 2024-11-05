import "./Home.css"
import useIsLogged from "../hooks/useIsLogged";




const HomePage = props => {
    const { isLoggedIn, user } = useIsLogged();
    return <div className="homepage">
        {isLoggedIn
            ? (<div>歡迎回來, {user.name}!</div>)
            : (<div>請登入以繼續。</div>)
        }
    </div>;

}
export default HomePage;