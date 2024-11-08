import { Link } from "react-router-dom";
import "./Header.css"
import { useAuth } from "../../contexts/authContext";
// import useIsLogged from "../../hooks/useIsLogged";



const Header = (props) => {
    const userdelete = () => {
        localStorage.removeItem('user');//刪除
        window.location.reload();
    }
    const { isLoggedIn, setIsLoggedIn } = useAuth()
    // const { isLoggedIn } = useIsLogged();
    return (
        <header>
            <Link to="/" className="link">
                <div className="logo">
                    <h3 className="ml-4 text-white">桌遊地圖</h3>
                </div>
            </Link>
            <nav className="navigation-bar">
                <Link to="/map" className="link">
                    <p className="navigation-item">地圖</p>
                </Link>
                <Link to="/" className="link">
                    <p className="navigation-item">貼文</p>
                </Link>
                {isLoggedIn
                    ? (<Link to="/apply" className="link">
                        <p className="navigation-item">新增店家</p>
                    </Link>)
                    : (<Link to="/login" className="link">
                        <p className="navigation-item">新增店家</p>
                    </Link>)
                }
            </nav>

            <div className="log-state">

                {isLoggedIn
                    ? (<Link to="/" className="link">
                        <p onClick={userdelete} className="to-login">登出</p>
                    </Link>)
                    : (<Link to="/login" className="link">
                        <p className="to-login">登入</p>
                    </Link>)
                }

            </div>
        </header>
    );
};

export default Header;