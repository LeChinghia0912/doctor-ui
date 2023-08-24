import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Profile from '../pages/Profile/Profile';
import { Home } from '../pages/Home';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/profile', element: <Profile /> },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
