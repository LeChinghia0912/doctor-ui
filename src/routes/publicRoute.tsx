import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Profile from '../pages/Profile/Profile';
import { Home } from '../pages/Home';

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/profile', element: <Profile /> },
        ],
    },
];

export default publicRoutes;
