import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../Components/Hooks/useAxios";
import { SnackbarSeverity, useContextUi } from "./uiContext";

const STORAGE_KEY = "acnh-user";
const ONE_DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

type AuthContextType = {
  isLoggedIn: boolean;
  handleLogin: (loginResponse: LoginResponse) => void;
  handleLogout: () => void;
  token: string | undefined;
};

type ProviderProps = {
  children: React.ReactNode;
};

interface LoginResponse {
  token: string;
  expiresAt: number;
  email: string;
  id: string;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
  const { post } = useAxios();
  const { showSnackbar } = useContextUi();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (!storedData) return;

    const userData = JSON.parse(storedData);
    const { token, expiresAt } = userData;
    const expires = Number(expiresAt);
    const now = new Date().getTime();

    const expired = expires < now;

    if (expired) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    const timeToExpiry = expires - now;

    if (timeToExpiry < ONE_DAY_IN_MILLIS) {
      refreshToken(userData, token);
    } else {
      setTimeout(() => {
        refreshToken(userData, token);
      }, timeToExpiry - ONE_DAY_IN_MILLIS);
    }

    setToken(token);
    setIsLoggedIn(true);
  }, []);

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

  const refreshToken = async (userInfo: LoginResponse, token: string) => {
    try {
      const { token: newToken, expiresAt: newExpiry } = await post(
        "/user/token-refresh",
        undefined,
        token
      );
      setToken(newToken);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...userInfo,
          token: newToken,
          expiresAt: newExpiry,
        })
      );
    } catch (e) {
      console.log("Could not refresh token", e);
      showSnackbar("Oops! Could not refresh token!", SnackbarSeverity.ERROR);
    }
  };

  const value = {
    isLoggedIn,
    handleLogin,
    handleLogout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContextData = () => {
  return useContext(AuthContext);
};
