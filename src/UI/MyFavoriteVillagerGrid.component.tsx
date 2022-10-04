import { BoxTitle, EmptyBox, GridContainer, VillagerBox } from "./Home.style";
import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useAuthContextData } from "../Context/authContext";
import { VillagerData } from "../Context/gameDataContextTypes";
import { useContextGameData } from "../Context/gameDataContext";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const MyFavoriteVillagerGrid = ({
  villagers,
}: {
  villagers: VillagerData[];
}) => {
  const gridBoxSX = {
    mt: 6,
    position: "relative",
    backgroundColor: "var(--light-gray)",
    width: "auto",
    height: "auto",
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
  const emptyBoxSX = {
    width: 400,
  };

  const { isLoggedIn } = useAuthContextData();
  const { handleRemoveFavorites } = useContextGameData();
  const navigate = useNavigate();

  const gotoAuth = () => {
    navigate("/auth");
  };

  const gotoVillager = () => {
    navigate("/villagers");
  };
  return (
    <Box sx={gridBoxSX}>
      <BoxTitle className="fav">
        <p>Favorite Villagers</p>
      </BoxTitle>
      {isLoggedIn ? (
        villagers.length > 0 ? (
          <GridContainer>
            {villagers.map((villager, index) => (
              <VillagerBox key={index}>
                <div>
                  <img src={villager.iconUrl} alt={villager.iconUrl} />
                </div>
                <div>{villager.name}</div>
                <IconButton
                  sx={iconButtonSX}
                  onClick={() => handleRemoveFavorites(villager.id)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </VillagerBox>
            ))}
          </GridContainer>
        ) : (
          <EmptyBox>
            <Button onClick={gotoVillager}>
              <AddIcon />
              <Typography sx={{ fontWeight: 600 }}>ADD</Typography>
            </Button>
          </EmptyBox>
        )
      ) : (
        <EmptyBox>
          <VillagerBox>
            <Button onClick={gotoAuth}>
              <AddIcon />
              <Typography sx={{ fontWeight: 600 }}>ADD</Typography>
            </Button>
          </VillagerBox>
        </EmptyBox>
      )}
    </Box>
  );
};

export default MyFavoriteVillagerGrid;
