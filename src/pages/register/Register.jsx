
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
            email: data.email,
            password: data.password
        };
        console.log("Enviado para evaluacion");
        const response =  dispatch(registerUser(userData)); 
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
                    Nuevo Usuario
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate sx={{ mt: 1 }}>
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
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color='success'>
                        Guardar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
