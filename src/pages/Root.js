import Header from "../layout/header/Header";
import { Outlet } from 'react-router-dom';
import Footer from "../layout/footer/footer";

const RootLayout = props => {
    return <div className="overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default RootLayout;