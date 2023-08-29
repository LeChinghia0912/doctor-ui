import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Profile from '../pages/Profile/Profile';
import { Home } from '../pages/Home';
import { Support } from '../pages/Support';
import HealthFacilities from '../pages/Health_Facilities/HealthFacilities';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Login from '../pages/LoginPage/Login';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/profile', element: <Profile /> },
            { path: '/support', element: <Support /> },
            { path: '/Cơ_Sở_Y_Tế', element: <HealthFacilities /> },
        ],
    },
    {
        path: '/RegisterPage',
        children: [{ path: '/RegisterPage', element: <RegisterPage /> }],
    },
    {
        path: '/login',
        children: [{ path: '/login', element: <Login /> }],
    },
];

const router = createBrowserRouter(routes);

export default router;
