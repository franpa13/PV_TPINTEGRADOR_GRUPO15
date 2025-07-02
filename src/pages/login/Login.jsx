import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetRegisterSuccess } from "../../store/auth";
import { SnackbarComponent } from "../../components/ui/snackbar/Snackbar";
// aqui va el form de login
export const Login = () => {
    const isRegister = useSelector((state) => state.auth.registerSuccess);


    const dispatch = useDispatch();
    return (
        // solo probe si andaba bien
        <>
            <div>
                <h2>login</h2>
                <Button onClick={() => dispatch(loginUser({ email: "franpa13@gmail.com", password: "franpa13" }))} >button</Button>
            </div>
            {isRegister && (
                <SnackbarComponent open={isRegister} onClose={()=>dispatch(resetRegisterSuccess())} message={"Usuario registrado correctamente"} />
            )}
        </>
    )
}
