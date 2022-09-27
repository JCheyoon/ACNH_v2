import { red } from "@mui/material/colors";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {
  CatchPhrase,
  VillagerCardItem,
  CatchPhraseBubble,
} from "./CardStyle.style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { VillagerData } from "../Context/gameDataContext";

interface Props {
  villager: VillagerData;
}

const VillagerCard = ({ villager }: Props) => {
  const {
    name,
    species,
    catchPhrase,
    iconUrl,
    imageUrl,
    gender,
    personality,
    birthdayString,
  } = villager;

  return (
    <Card sx={{ width: 345, position: "relative", overflow: "unset" }}>
      <CardHeader
        sx={{ backgroundColor: "#92d1e5" }}
        avatar={
          <CardMedia component="img" height="40" image={iconUrl} alt="icon" />
        }
        action={
          <>
            <IconButton
              aria-label="add to favorites"
              sx={{ backgroundColor: "white", mr: 1, color: "#dadada" }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="add to my Villager"
              sx={{ backgroundColor: "white", color: "#dadada" }}
            >
              <HomeIcon />
            </IconButton>
          </>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                textAlign: "start",
                color: "white",
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
        sx={{ p: 3, backgroundColor: "#f6f6f6" }}
      />
      <CatchPhrase>
        <CatchPhraseBubble />
        <div>{catchPhrase}</div>
      </CatchPhrase>
      <CardContent sx={{ backgroundColor: "#f6f6f6" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <VillagerCardItem className="title">Personality</VillagerCardItem>
              <VillagerCardItem className="title">Birthday</VillagerCardItem>
              <VillagerCardItem className="title">Species</VillagerCardItem>
            </Grid>
            <Grid item xs={8}>
              <VillagerCardItem>{personality}</VillagerCardItem>
              <VillagerCardItem>{birthdayString}</VillagerCardItem>
              <VillagerCardItem>{species}</VillagerCardItem>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VillagerCard;
