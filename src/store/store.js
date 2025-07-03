import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import authReducer from "./auth";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
     
    },
})