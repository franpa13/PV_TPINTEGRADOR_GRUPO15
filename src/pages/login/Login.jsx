import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth";
// aqui va el form de login
export const Login = () => {
    const dispatch = useDispatch();
    return (
        // solo probe si andaba bien
        <div>
            <h2>login</h2>
            <Button onClick={() => dispatch(loginUser({ email: "uchija", password: "madara" }))} >button</Button>
        </div>
    )
}
