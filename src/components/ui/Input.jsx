import React from "react";
import { TextField } from "@mui/material";

const Input = ({ ...props }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      {...props}
      sx={{
        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
      }}
    />
  );
};

export default Input;
