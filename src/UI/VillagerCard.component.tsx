import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { CatchPhrase, MyCardItem, CatchPhraseBubble } from "./CardStyle.style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { useContextGameData, VillagerData } from "../Context/gameDataContext";
import { useAuthContextData } from "../Context/authContext";

interface Props {
  villager: VillagerData;
}

const VillagerCard = ({ villager }: Props) => {
  const {
    id,
    name,
    species,
    catchPhrase,
    iconUrl,
    imageUrl,
    gender,
    personality,
    birthdayString,
  } = villager;
  const { isLoggedIn } = useAuthContextData();
  const { handleAddVillager, myVillagers } = useContextGameData();

  return (
    <Card sx={{ width: 345, position: "relative", overflow: "unset" }}>
      <CardHeader
        sx={{ backgroundColor: "var(--primary-main)" }}
        avatar={
          <CardMedia component="img" height="40" image={iconUrl} alt="icon" />
        }
        action={
          isLoggedIn ? (
            <>
              <IconButton
                aria-label="add to favorites"
                sx={{
                  backgroundColor: "var(--white)",
                  mr: 1,
                  color: "var(--gray)",
                }}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                onClick={
                  myVillagers.includes(id)
                    ? () => {
                        /*removeFunction*/
                      }
                    : () => handleAddVillager(id)
                }
                sx={{
                  backgroundColor: "var(--white)",
                  color: myVillagers.includes(id) ? "red" : "var(--gray)",
                }}
              >
                <HomeIcon />
              </IconButton>
            </>
          ) : null
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                textAlign: "start",
                color: "var(--white)",
                paddingRight: 3,
              }}
              display={"inline"}
            >
              {name}
            </Typography>
            <span>
              {gender === "Male" ? (
                <MaleIcon color="info" />
              ) : (
                <FemaleIcon color="info" />
              )}
            </span>
          </Box>
        }
      />
      <CardMedia
        component="img"
        height="345"
        image={imageUrl}
        alt={name}
        sx={{ p: 3, backgroundColor: "var(--light-gray)" }}
      />
      <CatchPhrase>
        <CatchPhraseBubble />
        <div>{catchPhrase}</div>
      </CatchPhrase>
      <CardContent sx={{ backgroundColor: "var(--light-gray)" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MyCardItem className="title">Personality</MyCardItem>
              <MyCardItem className="title">Birthday</MyCardItem>
              <MyCardItem className="title">Species</MyCardItem>
            </Grid>
            <Grid item xs={8}>
              <MyCardItem>{personality}</MyCardItem>
              <MyCardItem>{birthdayString}</MyCardItem>
              <MyCardItem>{species}</MyCardItem>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VillagerCard;
