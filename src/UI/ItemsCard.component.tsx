import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { MyCardItem } from "./CardStyle.style";
import { ItemsData } from "../Context/gameDataContextTypes";

interface Props {
  item: ItemsData;
}

const ItemsCard = ({ item }: Props) => {
  const {
    name,
    location,
    price,
    northern,
    southern,
    time,
    shadow,
    imageUrl,
    sellPrice,
    buyPrice,
    isAllDay,
    isAllYear,
    variants,
    size,
    isDIY,
  } = item;

  return (
    <Card
      sx={{
        width: 340,
        height: "100%",
        backgroundColor: "var(--primary-main)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContents: "center",
        }}
      >
        <Avatar
          sx={{ width: 90, height: 90, backgroundColor: "var(--white)" }}
          src={imageUrl}
        ></Avatar>
        <Typography
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: 600,
            margin: 7,
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            backgroundColor: "var(--light-gray)",
            width: 300,
            borderRadius: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {location && <MyCardItem className="title">Location</MyCardItem>}
              {shadow && <MyCardItem className="title">Shadow</MyCardItem>}
              {price && <MyCardItem className="title">Price</MyCardItem>}
              {(northern || (!northern && isAllYear)) && (
                <MyCardItem className="title">Northern</MyCardItem>
              )}
              {(southern || (!southern && isAllYear)) && (
                <MyCardItem className="title">Southern</MyCardItem>
              )}
              {(time || (!time && isAllDay)) && (
                <MyCardItem className="title">Time</MyCardItem>
              )}
              {(buyPrice || isDIY) && (
                <MyCardItem className="title">BuyPrice</MyCardItem>
              )}
              {sellPrice && (
                <MyCardItem className="title">SellPrice</MyCardItem>
              )}
              {size && <MyCardItem className="title">Size</MyCardItem>}
            </Grid>
            <Grid item xs={8}>
              {location && <MyCardItem>{location}</MyCardItem>}
              {shadow && <MyCardItem>{shadow}</MyCardItem>}
              {price && <MyCardItem>{price}</MyCardItem>}
              {northern && <MyCardItem>{northern}</MyCardItem>}
              {!northern && isAllYear && <MyCardItem>All year</MyCardItem>}
              {southern && <MyCardItem>{southern}</MyCardItem>}
              {!southern && isAllYear && <MyCardItem>All year</MyCardItem>}
              {time && <MyCardItem>{time}</MyCardItem>}
              {!time && isAllDay && <MyCardItem>All day</MyCardItem>}
              {buyPrice && <MyCardItem>{buyPrice}</MyCardItem>}
              {!buyPrice && isDIY && <MyCardItem>DIY items</MyCardItem>}
              {sellPrice && <MyCardItem>{sellPrice}</MyCardItem>}
              {size && (
                <MyCardItem>
                  <img
                    style={{ width: "25px" }}
                    src={`/${size}.png`}
                    alt={`/${size}.png`}
                  />
                </MyCardItem>
              )}
            </Grid>
          </Grid>
        </Box>
        {variants && variants.length > 0 && (
          <Box
            sx={{
              backgroundColor: "var(--white)",
              borderRadius: 1,
              width: 300,
              mt: 1,
            }}
          >
            <Box>
              <MyCardItem className="title">Variants</MyCardItem>
            </Box>
            <Box sx={{ overflowX: "auto", display: "flex", p: 2 }}>
              {variants &&
                variants.length > 0 &&
                variants.map((variant, index) => (
                  <Avatar
                    key={index}
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "var(--light-gray)",
                      marginRight: 1,
                    }}
                    src={variant}
                  />
                ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemsCard;
