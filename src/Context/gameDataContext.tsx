import React, { createContext, useContext, useState } from "react";
import { useContextUi } from "./uiContext";

interface VillagerResponse {
  id: number;
  name: { "name-USen": string };
  personality: string;
  ["birthday-string"]: string;
  species: string;
  gender: string;
  ["catch-phrase"]: string;
  icon_uri: string;
  image_uri: string;
}

export interface VillagerData {
  id: number;
  name: string;
  personality: string;
  birthdayString: string;
  species: string;
  gender: string;
  catchPhrase: string;
  iconUrl: string;
  imageUrl: string;
}

function mapVillagerData(response: VillagerResponse): VillagerData {
  return {
    id: response.id,
    birthdayString: response["birthday-string"],
    catchPhrase: response["catch-phrase"],
    gender: response.gender,
    iconUrl: response.icon_uri,
    imageUrl: response.image_uri,
    name: response.name["name-USen"],
    personality: response.personality,
    species: response.species,
  };
}

export type ContextType = {
  allVillagers: VillagerData[];
  fetchVillagers: () => Promise<void>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const GameDataContext = createContext({} as ContextType);

export const GameDataProvider = ({ children }: ProviderProps) => {
  const { setLoading } = useContextUi();
  const [allVillagers, setAllVillagers] = useState<VillagerData[]>([]);

  const fetchVillagers = async function () {
    try {
      setLoading(true);
      const res = await fetch("https://acnhapi.com/v1a/villagers/");
      const data = await res.json();
      if (!data) {
        return;
      }
      setAllVillagers(data.map(mapVillagerData));
    } catch (e) {
      console.log(e);
      // TODO handle error
    } finally {
      setLoading(false);
    }
  };

  const value = {
    allVillagers,
    fetchVillagers,
  };
  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useContextGameData = () => {
  return useContext(GameDataContext);
};
