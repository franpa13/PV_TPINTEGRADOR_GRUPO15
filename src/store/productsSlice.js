import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProducts: (_, action) => {
            return action.payload;
        },
        // el add product debe tener todos los campos que se esperan en el producto
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        },
        updateProduct: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        // cambiar favorito
        toggleFavorite: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index].favorite = !state[index].favorite;
            }
        },

    }
});

export const { setProducts, addProduct, removeProduct, updateProduct,toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;
