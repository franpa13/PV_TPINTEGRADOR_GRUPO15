
import { Button } from "@mui/material";

const CustomButton = ({ ...props }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      size="large"
      sx={{
        mt: 2,
        backgroundColor: "#388E3C",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#2E7D32",
        },
      }}
    >
      Crear
    </Button>
  );
};

export default CustomButton;
