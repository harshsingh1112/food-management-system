import { Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = () => {
    return (
        <HelmetProvider>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </HelmetProvider>

    );
};

export default MainLayout;