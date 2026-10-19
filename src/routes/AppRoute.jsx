import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layout/AuthLayout";
import LoggedInPage from "../pages/LoggedInPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";

const AppRoute = () => {

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <AuthLayout/>,
                children: [
                    {
                        path: '',
                        element: <LoggedInPage/>
                    },
                    {
                        path: 'register',
                        element: <RegisterPage/>
                    }
                ]
            },

            {
                path: '/main',
                element: <MainLayout/>
            }
        ]
    )

  return <RouterProvider router={router}/>;
};

export default AppRoute;
