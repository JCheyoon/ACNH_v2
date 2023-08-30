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

interface Props {
  closeDrawer: () => void;
}

const MenuCollections = ({ closeDrawer }: Props) => {
  const typoSX = {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={typoSX}
      >
        <Typography sx={{ fontWeight: 600 }} color="secondary">
          Collections
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <MyLink
            to={`/collections/${CollectionType.FURNITURE}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Furniture" image="/collection.png" />
          </MyLink>
          <MyLink
            to={`/collections/${CollectionType.INTERIOR}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Interior" image="/collection.png" />
          </MyLink>
          <MyLink
            to={`/collections/${CollectionType.ITEMS}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Miscellaneous" image="/collection.png" />
          </MyLink>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCollections;
