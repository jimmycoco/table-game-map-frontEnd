import Header from "../layout/Header";
import { Outlet } from 'react-router-dom';
import Footer from "../footer/footer";

const RootLayout = props => {
    return <div className="overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default RootLayout;