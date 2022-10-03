import { BoxTitle, GridContainer, VillagerBox } from "./Home.style";
import { Box, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useAuthContextData } from "../Context/authContext";
import { useContextGameData } from "../Context/gameDataContext";

const MyIslandVillagerGrid = () => {
  const gridBoxSX = {
    mt: 6,
    position: "relative",
    backgroundColor: "var(--light-gray)",
    width: 400,
    height: 190,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  };

  const iconButtonSX = {
    position: "absolute",
    top: -19,
    right: -15,
    color: "var(--red)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "var(--red-dark)",
    },
  };

  const { isLoggedIn } = useAuthContextData();
  const { myVillagers } = useContextGameData();

  return (
    <Box sx={gridBoxSX}>
      <BoxTitle>
        <p>Island Villagers</p>
      </BoxTitle>
      {isLoggedIn ? (
        <GridContainer>
          {myVillagers.map((index, _, villager) => (
            <VillagerBox key={index}>
              <div>
                <img src="/public/animalVector.png" />
              </div>
              <div>{villager}</div>
              <IconButton sx={iconButtonSX}>
                <RemoveCircleIcon />
              </IconButton>
            </VillagerBox>
          ))}
        </GridContainer>
      ) : (
        <GridContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, item) => (
            <VillagerBox key={index}>
              <div>
                <img src="/public/animalVector.png" />
              </div>
              <div>name</div>
              <IconButton sx={iconButtonSX}>
                <RemoveCircleIcon />
              </IconButton>
            </VillagerBox>
          ))}
        </GridContainer>
      )}
    </Box>
  );
};

export default MyIslandVillagerGrid;
