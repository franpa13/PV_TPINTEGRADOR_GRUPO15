import React from "react";
import { TextField } from "@mui/material";

const Input = ({ ...props }) => {
  return <TextField fullWidth margin="normal" {...props} />;
};

export default Input;
