import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { clearAlert } from "../../store/productsSlice";

export const ProductAlert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.products.alert);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    dispatch(clearAlert());
  };

  return (
    <Snackbar
      open={!!alert}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      {alert && (
        <Alert severity={alert.type} onClose={handleClose} variant="filled">
          {alert.message}
        </Alert>
      )}
    </Snackbar>
  );
};
