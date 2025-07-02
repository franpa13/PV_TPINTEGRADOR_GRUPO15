import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
    users: storedUsers,
    currentUser: storedCurrentUser,
    isAuthenticated: !!storedCurrentUser,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const userExists = state.users.some(user => user.email === action.payload.email);
            if (!userExists) {
                state.users.push(action.payload);
                localStorage.setItem("users", JSON.stringify(state.users));
                console.log("El usuario se agregó correctamente.");
            } else {
                console.warn("El usuario ya está registrado.");
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);
            if (user) {
                state.currentUser = user;
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(user));
            } else {
                console.warn("Credenciales incorrectas.");
            }
        },
        logoutUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.removeItem("currentUser");
        },
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
