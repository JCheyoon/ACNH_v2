import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { MyLink } from "./NavStyle.style";
import MenuItems from "./MenuItems.component";
import { EncyclopediaType } from "../../Routes/Encyclopedias";

export interface MenuItemProps {
  title: string;
  image: string;
}

const MenuEncyclopedias = () => {
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontWeight: 600 }} color="secondary">
          Encyclopedias
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <MyLink to={`/encyclopedia/${EncyclopediaType.BUGS}`}>
            <MenuItems title="Bugs" image="/public/bugs.png" />
          </MyLink>
          <MyLink to={`/encyclopedia/${EncyclopediaType.FISH}`}>
            <MenuItems title="Fish" image="/public/fish.png" />
          </MyLink>
          <MyLink to={`/encyclopedia/${EncyclopediaType.SEA_CREATURES}`}>
            <MenuItems title="Sea Creatures" image="/public/seaCreatures.png" />
          </MyLink>
          <MyLink to={`/encyclopedia/${EncyclopediaType.FOSSILS}`}>
            <MenuItems title="Fossils" image="/public/fossils.png" />
          </MyLink>
          <MyLink to={`/encyclopedia/${EncyclopediaType.ARTS}`}>
            <MenuItems title="Arts" image="/public/art.png" />
          </MyLink>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuEncyclopedias;
