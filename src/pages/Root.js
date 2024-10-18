import Header from "../layout/Header";
import { Outlet } from 'react-router-dom';

const RootLayout = props => {
    return <div className="overflow-x-hidden">
        <Header />
        <Outlet />
        {/* footer */}
    </div>
}

export default RootLayout;