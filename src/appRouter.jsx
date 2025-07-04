import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";

import { Favorites } from "./pages/favorites/Favorites";
import { DetailProduct } from "./pages/detailProduct/DetailProduct";
import { EditProduct } from "./pages/editProduct/EditProduct";
import { CreateProduct } from "./pages/createProduct/CreateProduct";
import { HomePage } from "./pages/home/HomePage";
import { PrivateRoute } from "./layout/PrivateRoute";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { AuthLayout } from "./layout/AuthLayout";
import { HomeLayout } from "./layout/HomeLayout";

import App from "./App";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" replace />,
            },
            {
                path: "shop",
                element: <HomeLayout />,
                children: [
                    {
                        index: true,
                        element: (
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "favorites",
                        element: (
                            <PrivateRoute>
                                <Favorites />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "detail-product/:id",
                        element: (
                            <PrivateRoute>
                                <DetailProduct />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "edit-product/:id",
                        element: (
                            <PrivateRoute>
                                <EditProduct />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: "create-product",
                        element: (
                            <PrivateRoute>
                                <CreateProduct />
                            </PrivateRoute>
                        ),
                    },
                ],
            },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "register",
                        element: <Register />,
                    },
                ],
            },
        ],
    },
]);
