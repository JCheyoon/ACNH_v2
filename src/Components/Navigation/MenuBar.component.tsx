import LoginIcon from "@mui/icons-material/Login";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import * as React from "react";
import MyLogo from "./MyLogo.component";
import { MenuBarLink } from "./NavStyle.style";
import MenuEncyclopedias from "./MenuEncylopedias.component";
import MenuCollections from "./MenuCollections.component";

interface Props {
  closeDrawer: () => void;
}

const MenuBar = ({ closeDrawer }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List>
        <ListItem sx={{ height: 70 }}>
          <MyLogo />
        </ListItem>
        <MenuBarLink to={"/"} onClick={closeDrawer}>
          <ListItem disablePadding>
            <ListItemButton sx={{ fontWeight: 600, height: 50 }}>
              Island
            </ListItemButton>
          </ListItem>
        </MenuBarLink>
        <MenuBarLink to={"/villagers"} onClick={closeDrawer}>
          <ListItem disablePadding>
            <ListItemButton sx={{ fontWeight: 600, height: 50 }}>
              Villagers
            </ListItemButton>
          </ListItem>
        </MenuBarLink>
        <MenuEncyclopedias closeDrawer={closeDrawer} />
        <MenuCollections closeDrawer={closeDrawer} />
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <MenuBarLink to={"/auth"} onClick={closeDrawer}>
        <ListItem disablePadding>
          <ListItemButton sx={{ height: 50 }}>
            <ListItemIcon>{<LoginIcon />}</ListItemIcon>
            <Typography sx={{ fontWeight: 600 }} color="secondary">
              LogIn
            </Typography>
          </ListItemButton>
        </ListItem>
      </MenuBarLink>
    </Box>
  );
};

export default MenuBar;
