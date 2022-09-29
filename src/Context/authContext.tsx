import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "acnh-user";

type AuthContextType = {
  isLoggedIn: boolean;
  handleLogin: (loginResponse: LoginResponse) => void;
  handleLogout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

interface LoginResponse {
  token: string;
  expiresAt: string;
  email: string;
  id: string;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>();

  const handleLogin = (loginResponse: LoginResponse) => {
    const { token } = loginResponse;
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loginResponse));
  };
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsLoggedIn(false);
    setToken(undefined);
    navigate("/");
  };

  const value = {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContextData = () => {
  return useContext(AuthContext);
};
