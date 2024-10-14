import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="w-screen h-14 bg-black flex justify-between items-center px-8">
            <Link to="/">
                <div className="flex justify-between items-center">
                    <h3 className="ml-4 text-white">桌遊地圖</h3>
                </div>
            </Link>
            <div className="text-gray-200">
                <Link to="/">
                    <button className="px-8 py-2 hover:text-white">地圖</button>
                </Link>
                <Link to="/">
                    <button className="px-8 py-2 hover:text-white">貼文</button>
                </Link>
                <Link to="/login">
                    <button className="px-8 py-2 hover:text-white">新增店家</button>
                </Link>
            </div>

            <div className="flex items-center">
                <Link to="/login">
                    <button className="text-gray-200 px-4 py-2 hover:text-white">
                        登入
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;