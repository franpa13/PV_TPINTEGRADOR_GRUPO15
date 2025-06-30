import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import { Favorites } from "./pages/favorites/Favorites";
import { DetailProduct } from "./pages/detailProduct/DetailProduct";
import { EditProduct } from "./pages/editProduct/EditProduct";
import { CreateProduct } from "./pages/createProduct/CreateProduct";
import { HomePage } from "./pages/home/HomePage";
import { PrivateRoute } from "./layout/PrivateRoute";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "home",
                element: <PrivateRoute>
                    <HomePage />
                </PrivateRoute>,
            },
            {
                path: "favorites",
                element: <PrivateRoute>
                    <Favorites />
                </PrivateRoute>,

            },
            {
                path: "detail-product/:id",
                element: <PrivateRoute>
                    <DetailProduct />
                </PrivateRoute>,
            },
            {
                path: "edit-product/:id",
                element: <PrivateRoute>
                    <EditProduct />
                </PrivateRoute>
            },
            {
                path: "create-product",
                element: <PrivateRoute>
                    <CreateProduct />
                </PrivateRoute>,
            }


        ],
    },
]);
