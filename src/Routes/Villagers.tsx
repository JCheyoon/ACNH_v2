import { Box, CircularProgress } from "@mui/material";
import VillagersFilter from "../UI/VillagersFilter.component";
import VillagerGrid from "../UI/VillagerGrid.component";
import { useEffect } from "react";
import { useContextGameData } from "../Context/gameDataContext";
import { useContextUi } from "../Context/uiContext";
import VillagersSearchBar from "../UI/VillagersSearchBar.component";
import { useAuthContextData } from "../Context/authContext";

const Villagers = () => {
  const { token } = useAuthContextData();
  const { fetchVillagers, getUserAcnhData } = useContextGameData();
  const { isLoading } = useContextUi();

  useEffect(() => {
    fetchVillagers();
  }, []);

  useEffect(() => {
    if (token) {
      getUserAcnhData();
    }
  }, [token]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex ",
        alignItems: "center",
        justifyContents: "center",
        flexDirection: "column",
        p: 5,
        mt: 8,
      }}
    >
      <VillagersFilter />
      <VillagersSearchBar />
      <VillagerGrid />
    </Box>
  );
};

export default Villagers;
