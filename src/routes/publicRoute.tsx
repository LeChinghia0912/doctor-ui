import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Profile from '../pages/Profile/Profile';
import { Home } from '../pages/Home';
import { Support } from '../pages/Support';
import HealthFacilities from '../pages/Health_Facilities/HealthFacilities';
import Login from '../pages/LoginPage/LoginPage';
import ServicePage from '../pages/Page_Service/ServicePage';
import DoctorLayout from '../layouts/HospitalDoctor/DoctorLayout';
import BookingPage from '../pages/Medical_Booking/BookingPage';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/profile', element: <Profile /> },
            { path: '/support', element: <Support /> },
            { path: '/Cơ_Sở_Y_Tế', element: <HealthFacilities /> },
            { path: '/Dịch_Vụ_Y_Tế', element: <ServicePage /> },
            { path: '/Đặt_Khám_Theo_Bác_Sĩ', element: <DoctorLayout /> },
            { path: '/hinh-thuc-dat-kham', element: <BookingPage /> },
        ],
    },

    {
        path: '/login',
        children: [{ path: '/login', element: <Login /> }],
    },
];

const router = createBrowserRouter(routes);

export default router;
