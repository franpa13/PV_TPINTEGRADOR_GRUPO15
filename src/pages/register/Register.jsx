import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth";

// aqui va el form de register

export const Register = () => {
    const dispatch = useDispatch();
    return (
        // solo probe si andaba bien
        <div>
            <h2>register</h2>
            <Button onClick={() => dispatch(registerUser({ email: "user1", password: "user1" }))} >button</Button>
        </div>

    )
}
