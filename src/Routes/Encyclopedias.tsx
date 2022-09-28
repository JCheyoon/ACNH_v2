import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { GridBox } from "../UI/CardStyle.style";
import { useEffect } from "react";
import ItemsCard from "../UI/ItemsCard.component";
import { useContextGameData } from "../Context/gameDataContext";

export enum EncyclopediaType {
  BUGS = "bugs",
  FISH = "fish",
  FOSSILS = "fossils",
  SEA_CREATURES = "sea",
  ARTS = "art",
}

const Encyclopedias = () => {
  const { type } = useParams<{ type: EncyclopediaType }>();
  const { fetchEncyclopedia, allEncyclopedia } = useContextGameData();

  useEffect(() => {
    if (!type) return;
    fetchEncyclopedia(type);
  }, [type]);

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
      <GridBox>
        <Grid container spacing={2}>
          {allEncyclopedia.map((item, index) => (
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
