import * as React from "react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#a7daea",
      main: "#92D1E5",
      dark: "#6692a0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#35b99e",
      main: "#03a886",
      dark: "#02755d",
      contrastText: "#000",
    },
  },
});

export default theme;
