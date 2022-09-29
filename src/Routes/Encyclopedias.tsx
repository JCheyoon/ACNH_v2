import { useParams } from "react-router-dom";
import { Box, CircularProgress, Grid } from "@mui/material";
import { GridBox } from "../UI/CardStyle.style";
import { useEffect } from "react";
import ItemsCard from "../UI/ItemsCard.component";
import { useContextGameData } from "../Context/gameDataContext";
import ItemSearchBar from "../UI/ItemSearchBar.component";
import { useContextUi } from "../Context/uiContext";

export enum EncyclopediaType {
  BUGS = "bugs",
  FISH = "fish",
  FOSSILS = "fossils",
  SEA_CREATURES = "sea",
  ARTS = "art",
}

const Encyclopedias = () => {
  const { type } = useParams<{ type: EncyclopediaType }>();
  const { isLoading } = useContextUi();
  const { fetchItems, filteredItems } = useContextGameData();

  useEffect(() => {
    if (!type) return;
    fetchItems(type);
  }, [type]);

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
      <ItemSearchBar />
      <GridBox>
        <Grid container spacing={2}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index} flexGrow={0}>
              <ItemsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </GridBox>
    </Box>
  );
};

export default Encyclopedias;
