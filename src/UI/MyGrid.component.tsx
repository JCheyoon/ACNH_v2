import { Grid } from "@mui/material";
import VillagerCard from "./VillagerCard.component";
import { GridBox } from "./CardStyle.style";
import { useContextGameData } from "../Context/gameDataContext";

const MyGrid = () => {
  const { allVillagers } = useContextGameData();

  return (
    <GridBox>
      <Grid container spacing={2}>
        {allVillagers.map((villager, index) => (
          <Grid item xs={12} md={6} lg={4} key={index} flexGrow={0}>
            <VillagerCard villager={villager} />
          </Grid>
        ))}
      </Grid>
    </GridBox>
  );
};

export default MyGrid;
