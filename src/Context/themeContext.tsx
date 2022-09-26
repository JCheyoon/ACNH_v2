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
      light: "#a6d4fa",
      main: "#92D1E5",
      dark: "#648dae",
      contrastText: "#fff",
    },
    secondary: {
      light: "#35b99e",
      main: "#03a886",
      dark: "#02755d",
      contrastText: "#000",
    },
    info: {
      main: "#fff",
    },
  },
});

export default theme;
