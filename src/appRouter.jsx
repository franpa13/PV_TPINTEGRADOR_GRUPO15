import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import { Favorites } from "./pages/favorites/Favorites";
import { DetailProduct } from "./pages/detailProduct/DetailProduct";
import { EditProduct } from "./pages/editProduct/EditProduct";
import { CreateProduct } from "./pages/createProduct/CreateProduct";
import { HomePage } from "./pages/home/HomePage";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "favorites",
                element: <Favorites></Favorites>,

            },
            {
                path: "detail-product/:id",
                element: <DetailProduct></DetailProduct>,
            },
            {
                path: "edit-product/:id",
                element: <EditProduct></EditProduct>
            },
            {
                path: "create-product",
                element: <CreateProduct></CreateProduct>,
            }


        ],
    },
]);
