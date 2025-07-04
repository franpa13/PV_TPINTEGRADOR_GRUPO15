
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth';
import { registerSchema } from '../../utils/validationSchemas';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../login/Login.css";

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ // Desestructure necessary functions and state
        resolver: yupResolver(registerSchema),
        defaultValues: {
            email: '@gmail.com'
        }
    });

    const onSubmit = (data) => {
        console.log("Formulario válido, datos:", data); // Keep existing console logs
        const newUserId = Date.now();
        const userData = {
            id: newUserId,
            userName: data.userName,
            email: data.email,
            password: data.password
        };
        console.log("Enviado para evaluacion");
        const response = dispatch(registerUser(userData));
        if (response) {
            console.log("Usuario registrado correctamente");
        } else {
            console.warn("El usuario ya está registrado");
        }
        reset();
        navigate("/");
    };
    //solo en caso que la validaciones fallen
    const onError = (errors, e) => {
        console.log("Errores de validación:", errors);
    };

    return (
        // 3. ENVOLVER EL CONTENEDOR CON LAS CLASES DE FONDO Y CENTRADO
        <div className="login-background">
            <div className="login-content-wrapper">
                <Container    sx={{margin:3}} component="main" maxWidth="xs" className="login-form-container">
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Nuevo Usuario
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="userName"
                                label="Nombre Publico"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                                {...register("userName")}
                                error={!!errors.username}
                                helperText={errors.username?.message}
                                color="secondary"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Correo electronico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                color="secondary"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                {...register("password")}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                color="secondary"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password2"
                                label="Repetir contraseña"
                                type="password"
                                id="password2"
                                autoComplete="new-password"
                                {...register("password2")}
                                error={!!errors.password2}
                                helperText={errors.password2?.message}
                                color="secondary"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color='secondary'>
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </div>
    );
}
