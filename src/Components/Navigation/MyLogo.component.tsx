import { Typography } from "@mui/material";
import * as React from "react";

const MyLogo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: { xs: 0, sm: 4 },
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 800,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      ACNH
    </Typography>
  );
};

export default MyLogo;
