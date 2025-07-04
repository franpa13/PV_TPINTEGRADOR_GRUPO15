import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  alert: null, // { type: 'success' | 'error' | 'info', message: string }
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.alert = { type: "success", message: "Producto creado exitosamente." };
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        state.alert = { type: "success", message: "Producto actualizado correctamente." };
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
      state.alert = { type: "info", message: "Producto eliminado." };
    },
    toggleFavorite: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index].favorite = !state.products[index].favorite;
      }
    },
    clearAlert: (state) => {
      state.alert = null;
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  updateProduct,
  toggleFavorite,
  clearAlert,
} = productsSlice.actions;

export default productsSlice.reducer;
