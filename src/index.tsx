import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./Context/themeContext";
import { GameDataProvider } from "./Context/gameDataContext";
import { UiProvider } from "./Context/uiContext";
import { AuthProvider } from "./Context/authContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <UiProvider>
        <AuthProvider>
          <GameDataProvider>
            <App />
          </GameDataProvider>
        </AuthProvider>
      </UiProvider>
    </ThemeProvider>
  </BrowserRouter>
);
