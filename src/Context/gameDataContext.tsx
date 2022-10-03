import React, { createContext, useContext, useState } from "react";
import { useContextUi } from "./uiContext";
import { EncyclopediaType } from "../Routes/Encyclopedias";
import { CollectionType } from "../Routes/Collections";
import { useAuthContextData } from "./authContext";
import { useAxios } from "../Components/Hooks/useAxios";
import {
  ItemsData,
  ItemsResponse,
  mapItemsData,
  mapVillagerData,
  VillagerData,
} from "./gameDataContextTypes";

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
  getUserAcnhData: () => Promise<void>;
  handleAddVillager: (villagerId: number) => Promise<void>;
  handleAddFavorites: (villagerId: number) => Promise<void>;
  handleRemoveVillager: (villagerId: number) => Promise<void>;
  handleRemoveFavorites: (villagerId: number) => Promise<void>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const GameDataContext = createContext({} as GameDataContextType);

export const GameDataProvider = ({ children }: ProviderProps) => {
  const { get, post } = useAxios();
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
      const response = await post(
        "/acnh/village/add",
        {
          villagerId,
        },
        token
      );
      const { villagers } = response.data;
      setMyVillagers(villagers);
    } catch (e) {
      //TODO
      console.log(e);
    }
  };

  const handleAddFavorites = async (villagerId: number) => {
    try {
      const response = await post(
        "/acnh/favorites/add",
        {
          villagerId,
        },
        token
      );
      const { villagers } = response.data;
      setMyFavorites(villagers);
    } catch (e) {
      //TODO
      console.log(e);
    }
  };
  const handleRemoveVillager = async (villagerId: number) => {
    try {
      const response = await post(
        "/acnh/village/remove",
        {
          villagerId,
        },
        token
      );
      const { villagers } = response.data;
      setMyVillagers(villagers);
    } catch (e) {
      //TODO
      console.log(e);
    }
  };
  const handleRemoveFavorites = async (villagerId: number) => {
    try {
      const response = await post(
        "/acnh/favorites/remove",
        {
          villagerId,
        },
        token
      );
      const { villagers } = response.data;
      setMyVillagers(villagers);
    } catch (e) {
      //TODO
      console.log(e);
    }
  };

  const getUserAcnhData = async () => {
    try {
      const response = await get("/acnh", token);
      const { villagers, favorites } = response.data;
      setMyVillagers(villagers);
      setMyFavorites(favorites);
      console.log(villagers);
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
    getUserAcnhData,
    handleAddVillager,
    handleAddFavorites,
    handleRemoveVillager,
    handleRemoveFavorites,
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
