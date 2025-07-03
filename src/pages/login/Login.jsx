import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetLoginError, resetRegisterSuccess } from '../../store/auth';
import { SnackbarComponent } from '../../components/ui/snackbar/Snackbar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // IMPORTA useForm

import {
    Button,
    TextField,
    Container,
    Box,
    Typography,
    Alert,
    Link
} from '@mui/material';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //INICIA useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Obtener estados relevantes de Redux
    const isRegisterSuccess = useSelector((state) => state.auth.registerSuccess);
    const loginErrorMessage = useSelector((state) => state.auth.loginError);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Efecto para REDIRIGIR si el usuario ya está AUTENTICADO
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/shop'); // Redirige a la Home si ya está autenticado
        }
    }, [isAuthenticated, navigate]);
    console.log(isAuthenticated, "is authenticated");

    const onSubmit = (data) => {
        // data contendrá { email: "valor", password: "valor" }
        console.log("Datos del formulario con useForm:", data);

        dispatch(resetLoginError());
        dispatch(resetRegisterSuccess());

        dispatch(loginUser({ email: data.email, password: data.password }));

    };

    const handleCloseRegisterSnackbar = () => {
        dispatch(resetRegisterSuccess());
    };

    const handleCloseLoginError = () => {
        dispatch(resetLoginError());
    };

    // Función para manejar el clic en el BOTON/ENLACE de REGISTRO
    const handleRegisterClick = () => {
        navigate('/auth/register'); // Redirige a la ruta de REGISTRO
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                {/* CONECTA el formulario con handleSubmit de useForm */}
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        color="success"

                        // Registra el INPUT con useForm
                        {...register("email", { required: "El correo es obligatorio" })}

                        // Muestra errores 
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color="success"

                        // REGISTRA el INPUT con useForm
                        {...register("password", { required: "La contraseña es obligatoria" })}

                        // Muestra error
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    {/* MENSAJE de ERROR de inicio de sesión */}
                    {loginErrorMessage && (
                        <Alert severity="error" sx={{ mt: 2 }} onClose={handleCloseLoginError}>
                            {loginErrorMessage}
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="success"
                    >
                        Entrar
                    </Button>
                </Box>

                {/* BOTON/ENLACE de registro */}
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">
                        ¿No tenes una cuenta?{' '}
                        <Link component="button" variant="body2" onClick={handleRegisterClick}>
                            Registrate aquí
                        </Link>
                    </Typography>
                </Box>

            </Box>

        </Container>
    );
};