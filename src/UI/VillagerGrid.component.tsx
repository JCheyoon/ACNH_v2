import { Grid } from "@mui/material";
import VillagerCard from "./VillagerCard.component";
import { GridBox } from "./CardStyle.style";
import { useContextGameData } from "../Context/gameDataContext";

const VillagerGrid = () => {
  const { filteredVillagers } = useContextGameData();

  return (
    <GridBox>
      <Grid container spacing={2}>
        {filteredVillagers.map((villager, index) => (
          <Grid item xs={12} md={6} lg={4} key={index} flexGrow={0}>
            <VillagerCard villager={villager} />
          </Grid>
        ))}
      </Grid>
    </GridBox>
  );
};

export default VillagerGrid;
