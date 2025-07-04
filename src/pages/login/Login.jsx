import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetLoginError, resetRegisterSuccess } from '../../store/auth';

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
import './Login.css'; // Asegúrate de que esta ruta sea correcta: './login.css'

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //INICIA useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Obtener estados relevantes de Redux

    const loginErrorMessage = useSelector((state) => state.auth.loginError);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Efecto para REDIRIGIR si el usuario ya está AUTENTICADO
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/shop'); // Redirige a la Home si ya está autenticado
        }
    }, [isAuthenticated, navigate]);


    const onSubmit = (data) => {
        // data contendrá { email: "valor", password: "valor" }
        console.log("Datos del formulario con useForm:", data);

        dispatch(resetLoginError());
        dispatch(resetRegisterSuccess());

        dispatch(loginUser({ email: data.email, password: data.password }));

    };



    const handleCloseLoginError = () => {
        dispatch(resetLoginError());
    };

    // Función para manejar el clic en el BOTON/ENLACE de REGISTRO
    const handleRegisterClick = () => {
        navigate('/auth/register'); // Redirige a la ruta de REGISTRO
    };

    return (
        // DIV PRINCIPAL que APLICA el FONDO a toda la pantalla.
        <div className="login-background"> 
            {/* Este div ENVUELVE el CONTENIDO del login (el FORMULARIO)
                y lo centra usando Flexbox. Su estilo está en login.css (.login-content-wrapper) */}
            <div className="login-content-wrapper"> 
                {/* El Container de Material-UI que contiene el formulario.
                    Le aplicamos la clase 'login-form-container' para darle el fondo blanco y la sombra. */}
                <Container
                    component="main"
                    maxWidth="xs"
                    className="login-form-container"
                    sx={{margin:3}}
                >
                    <Box
                        sx={{
                            marginTop: 2,
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
                                color="secondary"

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
                                color="secondary"

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
                                color="secondary"
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
            </div> 
        </div> 
    );
};