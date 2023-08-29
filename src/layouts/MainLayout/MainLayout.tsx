import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout: React.FC = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <div>
                <Outlet />
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;
