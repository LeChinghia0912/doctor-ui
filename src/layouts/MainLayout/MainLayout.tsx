import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '140px' }}>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
