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

interface Props {
  closeDrawer: () => void;
}

const MenuEncyclopedias = ({ closeDrawer }: Props) => {
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
          Encyclopedias
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <MyLink
            to={`/encyclopedia/${EncyclopediaType.BUGS}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Bugs" image="/bugs.png" />
          </MyLink>
          <MyLink
            to={`/encyclopedia/${EncyclopediaType.FISH}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Fish" image="/fish.png" />
          </MyLink>
          <MyLink
            to={`/encyclopedia/${EncyclopediaType.SEA_CREATURES}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Sea Creatures" image="seaCreatures.png" />
          </MyLink>
          <MyLink
            to={`/encyclopedia/${EncyclopediaType.FOSSILS}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Fossils" image="fossils.png" />
          </MyLink>
          <MyLink
            to={`/encyclopedia/${EncyclopediaType.ARTS}`}
            onClick={closeDrawer}
          >
            <MenuItems title="Arts" image="/art.png" />
          </MyLink>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuEncyclopedias;
