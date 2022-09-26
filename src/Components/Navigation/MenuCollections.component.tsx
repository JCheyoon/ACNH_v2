import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { CollectionType } from "../../Routes/Collections";
import { MyLink } from "./NavStyle.style";
import MenuItems from "./MenuItems.component";

const MenuCollections = () => {
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontWeight: 600 }} color="secondary">
          Collections
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <MyLink to={`/collections/${CollectionType.HOUSEWARES}`}>
            <MenuItems title="HouseWares" image="/public/collection.png" />
          </MyLink>
          <MyLink to={`/collections/${CollectionType.WALL_MOUNTED}`}>
            <MenuItems title="WallMounted" image="/public/collection.png" />
          </MyLink>
          <MyLink to={`/collections/${CollectionType.MISC}`}>
            <MenuItems title="Miscellaneous" image="/public/collection.png" />
          </MyLink>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCollections;
