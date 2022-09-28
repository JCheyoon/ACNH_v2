import React, { createContext, useContext, useState } from "react";
import { useContextUi } from "./uiContext";
import { EncyclopediaType } from "../Routes/Encyclopedias";

//villagers Data
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

//Items Data
interface EncyclopediaResponse {
  id: number;
  name: { "name-USen": string };
  availability?: {
    "month-northern": string;
    "month-southern": string;
    time: string;
    location: string;
    isAllDay: boolean;
    isAllYear: boolean;
  };
  shadow?: string;
  price: number;
  image_uri: string;
  icon_uri: string;
  "sell-price"?: string;
  "buy-price"?: string;
}

export interface EncyclopediaData {
  id: number;
  name: string;
  imageUrl: string;
  price?: number;
  northern?: string;
  southern?: string;
  time?: string;
  location?: string;
  shadow?: string;
  sellPrice?: string;
  buyPrice?: string;
  isAllDay?: boolean;
  isAllYear?: boolean;
}

function mapEncyclopediaData(response: EncyclopediaResponse): EncyclopediaData {
  return {
    buyPrice: response["buy-price"],
    id: response.id,
    imageUrl: response.icon_uri ?? response.image_uri,
    location: response.availability?.location,
    name: response.name["name-USen"],
    northern: response.availability?.["month-northern"],
    price: response.price,
    sellPrice: response["sell-price"],
    shadow: response.shadow,
    southern: response.availability?.["month-southern"],
    time: response.availability?.time,
    isAllDay: response.availability?.isAllDay,
    isAllYear: response.availability?.isAllYear,
  };
}

/////context

export type ContextType = {
  allEncyclopedia: EncyclopediaData[];
  fetchEncyclopedia: (address: EncyclopediaType) => Promise<void>;
  fetchVillagers: () => Promise<void>;
  filterByPersonality: (personality: string) => void;
  filteredVillagers: VillagerData[];
  searchByNameAndSpecies: (searchField: string) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

const GameDataContext = createContext({} as ContextType);

export const GameDataProvider = ({ children }: ProviderProps) => {
  const { setLoading } = useContextUi();
  const [allEncyclopedia, setAllEncyclopedia] = useState<EncyclopediaData[]>(
    []
  );
  const [allVillagers, setAllVillagers] = useState<VillagerData[]>([]);
  const [filteredVillagers, setFilteredVillagers] = useState<VillagerData[]>(
    []
  );

  const fetchEncyclopedia = async function (address: EncyclopediaType) {
    try {
      setLoading(true);
      const res = await fetch(`https://acnhapi.com/v1a/${address}/`);
      const data = await res.json();
      if (!data) {
        return;
      }
      const encyclopedias = data.map(mapEncyclopediaData);
      setAllEncyclopedia(encyclopedias);
    } catch (e) {
      console.log(e);
      // TODO handle error
    } finally {
      setLoading(false);
    }
  };

  const fetchVillagers = async function () {
    try {
      setLoading(true);
      const res = await fetch("https://acnhapi.com/v1a/villagers/");
      const data = await res.json();
      if (!data) {
        return;
      }
      const villagers = data.map(mapVillagerData);
      setAllVillagers([...villagers]);
      setFilteredVillagers([...villagers]);
    } catch (e) {
      console.log(e);
      // TODO handle error
    } finally {
      setLoading(false);
    }
  };

  const filterByPersonality = (personality: string) => {
    if (personality === "All") {
      setFilteredVillagers([...allVillagers]);
      return;
    }

    const filtered = allVillagers.filter((Villager) => {
      return Villager.personality.includes(personality);
    });
    setFilteredVillagers(filtered);
  };

  const searchByNameAndSpecies = (searchField: string) => {
    if (searchField === "") {
      setFilteredVillagers([...allVillagers]);
      return;
    }
    const filtered = allVillagers.filter(({ name, species }) => {
      return (
        name.toLowerCase().includes(searchField.toLowerCase()) ||
        species.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setFilteredVillagers(filtered);
  };

  const value = {
    allEncyclopedia,
    fetchEncyclopedia,
    fetchVillagers,
    filteredVillagers,
    filterByPersonality,
    searchByNameAndSpecies,
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
