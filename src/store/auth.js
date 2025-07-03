import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
    users: storedUsers,
    currentUser: storedCurrentUser,
    isAuthenticated: !!storedCurrentUser,
    registerSuccess: null,
    loginError: null, // [Commit: Añade el estado loginError al initialState]
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
                state.registerSuccess = true;
                state.loginError = null; // [Commit: Limpia loginError al registrar con éxito]
            } else {
                console.warn("El usuario ya está registrado.");
                state.registerSuccess = false;
                state.loginError = null; // [Commit: Limpia loginError al fallar el registro]
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);
            if (user) {
                state.currentUser = user;
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(user));
                state.loginError = null; // [Commit: Limpia loginError al iniciar sesión con éxito]
            } else {
                console.warn("Informacion Invalida.");
                state.currentUser = null; // [Commit: Limpia currentUser al fallar el inicio de sesión]
                state.isAuthenticated = false; // [Commit: Establece isAuthenticated en false al fallar el inicio de sesión]
                state.loginError = "Informacion incorrecta. Verifica tu correo y contraseña."; // [Commit: Establece el mensaje de loginError al fallar el inicio de sesión]
            }
        },
        logoutUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.removeItem("currentUser");
            state.loginError = null; // [Commit: Limpia loginError al cerrar sesión]
            state.registerSuccess = null; // [Commit: Limpia registerSuccess al cerrar sesión]
        },
        resetRegisterSuccess: (state) => {
            state.registerSuccess = null;
        },
        resetLoginError: (state) => { // [Commit: Añade el reducer resetLoginError]
            state.loginError = null;
        },
    },
});

export const { registerUser, loginUser, logoutUser, resetRegisterSuccess, resetLoginError } = authSlice.actions; // [Commit: Exporta la acción resetLoginError]
export default authSlice.reducer;
