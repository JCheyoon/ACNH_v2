import { useParams } from "react-router-dom";
import LoadingCircular from "../UI/LoadingCircular.component";
import { Box, Grid } from "@mui/material";
import ItemSearchBar from "../UI/ItemSearchBar.component";
import { GridBox } from "../UI/CardStyle.style";
import ItemsCard from "../UI/ItemsCard.component";
import { useContextGameData } from "../Context/gameDataContext";
import { useEffect } from "react";
import { useContextUi } from "../Context/uiContext";

export enum CollectionType {
  FURNITURE = "furniture",
  INTERIOR = "interior",
  ITEMS = "items",
}

const Collections = () => {
  const { type } = useParams<{ type: CollectionType }>();
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
        <LoadingCircular />
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

export default Collections;
