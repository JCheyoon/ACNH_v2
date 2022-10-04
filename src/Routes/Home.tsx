import { Box, Typography } from "@mui/material";
import MyIslandVillagerGrid from "../UI/MyIslandVillagerGrid.component";
import { useContextGameData } from "../Context/gameDataContext";
import { useEffect, useState } from "react";
import { useAuthContextData } from "../Context/authContext";
import { VillagerData } from "../Context/gameDataContextTypes";
import MyFavoriteVillagerGrid from "../UI/MyFavoriteVillagerGrid.component";

const Home = () => {
  const containerBoxSX = {
    display: "flex ",
    alignItems: "center",
    justifyContents: "center",
    flexDirection: "column",
    p: 5,
    mt: 8,
  };

  const {
    getUserAcnhData,
    fetchVillagers,
    myVillagers,
    allVillagers,
    myFavorites,
  } = useContextGameData();
  const { token } = useAuthContextData();
  const [villagers, setVillagers] = useState<VillagerData[]>([]);
  const [fav, setFav] = useState<VillagerData[]>([]);

  useEffect(() => {
    fetchVillagers();
  }, []);

  useEffect(() => {
    if (token) {
      getUserAcnhData();
    }
  }, [token]);

  useEffect(() => {
    if (allVillagers?.length) {
      const villagerData = myVillagers
        .map((villagerId) => allVillagers.find(({ id }) => id === villagerId))
        .filter((villager) => !!villager);

      setVillagers(villagerData as VillagerData[]);
      const favData = myFavorites
        .map((villagerId) => allVillagers.find(({ id }) => id === villagerId))
        .filter((villager) => !!villager);

      setFav(favData as VillagerData[]);
    }
  }, [allVillagers, myVillagers, myFavorites]);

  return (
    <Box sx={containerBoxSX}>
      <Typography
        variant={"h4"}
        sx={{ fontWeight: 600, color: "var(--primary-dark)" }}
      >
        MY ISLAND
      </Typography>
      <MyIslandVillagerGrid villagers={villagers} />
      <MyFavoriteVillagerGrid villagers={fav} />
    </Box>
  );
};
export default Home;
