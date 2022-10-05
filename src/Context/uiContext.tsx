import React, { createContext, useContext, useState } from "react";
import MySnackbar from "../UI/SnackBar.component";
import { AlertColor } from "@mui/material";

type ContextType = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  showSnackbar: (message: string, severity: SnackbarSeverity) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export enum SnackbarSeverity { // MUI type AlertColor - same values
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
}

const UiContext = createContext({} as ContextType);

export const UiProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>(
    SnackbarSeverity.INFO
  );

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const showSnackbar = (message: string, severity: SnackbarSeverity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const value = {
    isLoading,
    setLoading,
    showSnackbar,
  };
  return (
    <UiContext.Provider value={value}>
      <>
        {children}
        <MySnackbar
          open={snackbarOpen}
          setOpen={setSnackbarOpen}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
      </>
    </UiContext.Provider>
  );
};

export const useContextUi = () => {
  return useContext(UiContext);
};
