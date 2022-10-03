import { Box, Typography } from "@mui/material";
import MyIslandVillagerGrid from "../UI/MyIslandVillagerGrid.component";
import { useContextGameData } from "../Context/gameDataContext";
import { useEffect } from "react";
import { useAuthContextData } from "../Context/authContext";

const Home = () => {
  const containerBoxSX = {
    display: "flex ",
    alignItems: "center",
    justifyContents: "center",
    flexDirection: "column",
    p: 5,
    mt: 8,
  };

  const { getUserAcnhData } = useContextGameData();
  const { token } = useAuthContextData();

  useEffect(() => {
    if (token) {
      getUserAcnhData();
    }
  }, [token]);

  return (
    <Box sx={containerBoxSX}>
      <Typography
        variant={"h4"}
        sx={{ fontWeight: 600, color: "var(--primary-dark)" }}
      >
        MY ISLAND
      </Typography>
      <MyIslandVillagerGrid />
    </Box>
  );
};
export default Home;
