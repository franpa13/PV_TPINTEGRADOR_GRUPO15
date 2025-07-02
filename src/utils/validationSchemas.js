
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo electrónico no válido') // Valida formato de email
        .required('El correo electrónico es obligatorio'), 
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres') // Mínimo 6 caracteres
        .required('La contraseña es obligatoria'), 
    password2: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir') // Valida que coincida con el campo 'password'
         .required('Por favor, confirma tu contraseña') 
});
