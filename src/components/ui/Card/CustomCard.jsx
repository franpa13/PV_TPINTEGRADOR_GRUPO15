import React from "react";
import { Card } from "@mui/material";

const CustomCard = ({ ...rest }) => {
  return (
    <Card
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        marginTop: 4,
        marginBottom: 4,
        boxShadow: 6,
        boxSizing: "border-box",
        width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
        mx: "auto",
        borderRadius: 3,
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: { xs: 2, sm: 3, md: 4 },
      }}
      {...rest}
    ></Card>
  );
};

export default CustomCard;
