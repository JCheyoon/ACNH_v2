import React, { createContext, useContext, useState } from "react";
import { useContextUi } from "./uiContext";
import { EncyclopediaType } from "../Routes/Encyclopedias";
import { CollectionType } from "../Routes/Collections";
import { useAuthContextData } from "./authContext";
const BASE_URL = import.meta.env.VITE_API_URL;

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
interface ItemsResponse {
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
  variant?: string;
  size?: string;
  isDIY?: boolean;
}

export interface ItemsData {
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
  variants?: string[];
  size?: string;
  isDIY?: boolean;
}

function mapItemsData(response: ItemsResponse): ItemsData {
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
    size: response.size,
    isDIY: response.isDIY,
  };
}

/////context

export type GameDataContextType = {
  filteredItems: ItemsData[];
  fetchItems: (address: EncyclopediaType | CollectionType) => Promise<void>;
  searchByName: (searchField: string) => void;
  fetchVillagers: () => Promise<void>;
  filterByPersonality: (personality: string) => void;
  filteredVillagers: VillagerData[];
  searchByNameAndSpecies: (searchField: string) => void;
  myVillagers: number[];
  myFavorites: number[];
  handleAddVillager: (villagerId: number) => Promise<void>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const GameDataContext = createContext({} as GameDataContextType);

export const GameDataProvider = ({ children }: ProviderProps) => {
  const { setLoading } = useContextUi();
  const [allItems, setAllItems] = useState<ItemsData[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemsData[]>([]);
  const [allVillagers, setAllVillagers] = useState<VillagerData[]>([]);
  const [filteredVillagers, setFilteredVillagers] = useState<VillagerData[]>(
    []
  );
  const [myVillagers, setMyVillagers] = useState<number[]>([]);
  const [myFavorites, setMyFavorites] = useState<number[]>([]);

  const { token } = useAuthContextData();

  const fetchItems = async function (
    address: EncyclopediaType | CollectionType
  ) {
    try {
      setLoading(true);
      const res = await fetch(`https://acnhapi.com/v1a/${address}/`);
      const data = await res.json();
      if (!data) {
        return;
      }
      const items = data.map((item: ItemsResponse | ItemsResponse[]) => {
        if (Array.isArray(item)) {
          const myItem = mapItemsData(item[0]);
          const rawVariants = item
            .map((i: ItemsResponse) => i.image_uri)
            .filter((i: string | undefined) => !!i) as string[];
          myItem.variants = Array.from(new Set(rawVariants));
          return myItem;
        } else {
          return mapItemsData(item);
        }
      });
      setAllItems(items);
      setFilteredItems([...items]);
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
      const storedItems = localStorage.getItem("villagers");
      if (storedItems) {
        const villagers = JSON.parse(storedItems);
        setAllVillagers(villagers);
        setFilteredVillagers([...villagers]);
        return;
      }
      const res = await fetch("https://acnhapi.com/v1a/villagers/");
      const data = await res.json();
      if (!data) {
        return;
      }
      const villagers = data.map(mapVillagerData);
      setAllVillagers([...villagers]);
      setFilteredVillagers([...villagers]);
      localStorage.setItem("villagers", JSON.stringify(villagers));
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

  const searchByName = (searchField: string) => {
    if (searchField === "") {
      setFilteredItems([...allItems]);
      return;
    }
    const filtered = allItems.filter(({ name }) => {
      return name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredItems(filtered);
  };

  const handleAddVillager = async (villagerId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/village/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ villagerId }),
      });
      const { villagers } = await response.json();
      setMyVillagers(villagers);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    filteredItems,
    fetchItems,
    searchByName,
    fetchVillagers,
    filteredVillagers,
    filterByPersonality,
    searchByNameAndSpecies,
    myVillagers,
    myFavorites,
    handleAddVillager,
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
