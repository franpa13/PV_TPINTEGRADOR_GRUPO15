import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// aqui va el form de register

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [password2, setPassword2]= useState('');
    const lastId = useSelector((state) => state.auth.users.length);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const data = {
            id: lastId + 1,
            email,
            password
        }
        console.log("Enviado para evaluacion");
        dispatch(
            registerUser(data)
        )
       // navigate("/");
    }        

    return (
        // solo probe si andaba bien
        
        <div>
            <h2>Nuevo Usuario</h2>
            <form action="" onSubmit={handleSubmit}>
                <label >Correo electronimo: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su correo'/>
                <label>Contraseña: </label>
                <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Contraseña'/>
            {/*  <label>Repetir contraseña: </label>
                <input type="text" value={password2} onChange={(e)=> setPassword2(e.target.value)} placeholder='Repetir contraseña'/>
            */}
                <Button type='submit'>Guardar</Button>
            </form>
            
        </div>

    )
}
