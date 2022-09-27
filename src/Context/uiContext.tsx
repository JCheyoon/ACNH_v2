import React, { createContext, useContext, useState } from "react";

type ContextType = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

const UiContext = createContext({} as ContextType);

export const UiProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const value = {
    isLoading,
    setLoading,
  };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export const useContextUi = () => {
  return useContext(UiContext);
};
