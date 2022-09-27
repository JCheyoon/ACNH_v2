import { Box, CircularProgress } from "@mui/material";
import VillagersFilter from "../UI/VillagersFilter.component";
import MyGrid from "../UI/MyGrid.component";
import { useEffect } from "react";
import { useContextGameData } from "../Context/gameDataContext";
import { useContextUi } from "../Context/uiContext";

const Villagers = () => {
  const { fetchVillagers } = useContextGameData();
  const { isLoading } = useContextUi();

  useEffect(() => {
    fetchVillagers();
  }, []);

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
      }}
    >
      <VillagersFilter />
      <MyGrid />
    </Box>
  );
};

export default Villagers;
