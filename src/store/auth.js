import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
    users: storedUsers,
    currentUser: storedCurrentUser,
    isAuthenticated: !!storedCurrentUser,
    registerSuccess: null,
    loginError: null, // AÑADE el estado loginError al initialState
    alertRegister: null, // { type: 'success' | 'error' | 'info', message: string }
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
                console.log("Usuario registrado con éxito.");
                state.registerSuccess = true;
                state.loginError = null; // LIMPIA loginError al registrar con éxito]
                state.alertRegister = { type: "success", message: "Usuario registrado con éxito." };
            } else {
                console.warn("El usuario ya está registrado.");
                state.registerSuccess = false;
                state.loginError = null; // LIMPIA loginError al fallar el registro
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);
            if (user) {
                state.currentUser = user;
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(user));
                state.loginError = null; // LIMPIA loginError al iniciar sesión con éxito
            } else {
                console.warn("Informacion Invalida.");
                state.currentUser = null; // LIMPIA currentUser al fallar el inicio de sesión
                state.isAuthenticated = false; // Establece isAuthenticated en false al fallar el inicio de sesión
                state.loginError = "Informacion incorrecta. Verifica tu correo y contraseña.";
            }
        },
        logoutUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.removeItem("currentUser");
            state.loginError = null; // LIMPIA loginError al cerrar sesión
            state.registerSuccess = null; // LIMPIA registerSuccess al cerrar sesión
        },
        resetRegisterSuccess: (state) => {
            state.registerSuccess = null;
        },
        resetLoginError: (state) => { // Añade el reducer resetLoginError
            state.loginError = null;
        },
        clearAlertRegister: (state) => {
            state.alertRegister = null; // LIMPIA el estado de alerta
        }
    },
});

export const { registerUser, loginUser, logoutUser, resetRegisterSuccess, resetLoginError, clearAlertRegister } = authSlice.actions; // [Commit: Exporta la acción resetLoginError]
export default authSlice.reducer;
