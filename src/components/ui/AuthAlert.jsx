import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { clearAlertRegister } from "../../store/auth";

export const AuthAlert = () => {
    const dispatch = useDispatch();
    const alertRegister = useSelector((state) => state.auth.alertRegister);

    const handleClose = (_, reason) => {
        if (reason === "clickaway") return;
        dispatch(clearAlertRegister());
    };

    return (
        <Snackbar
            open={!!alertRegister}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            {alertRegister && (
                <Alert severity={alertRegister.type} onClose={handleClose} variant="filled">
                    {alertRegister.message}
                </Alert>
            )}
        </Snackbar>
    );
};
