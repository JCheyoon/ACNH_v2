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

const MenuBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List>
        <ListItem sx={{ height: 70 }}>
          <MyLogo />
        </ListItem>
        <MenuBarLink to={"/"}>
          <ListItem disablePadding>
            <ListItemButton sx={{ fontWeight: 600, height: 50 }}>
              Island
            </ListItemButton>
          </ListItem>
        </MenuBarLink>
        <MenuBarLink to={"/villagers"}>
          <ListItem disablePadding>
            <ListItemButton sx={{ fontWeight: 600, height: 50 }}>
              Villagers
            </ListItemButton>
          </ListItem>
        </MenuBarLink>
        <MenuEncyclopedias />
        <MenuCollections />
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <ListItem disablePadding>
        <ListItemButton sx={{ height: 50 }}>
          <ListItemIcon>{<LoginIcon />}</ListItemIcon>
          <Typography sx={{ fontWeight: 600 }} color="secondary">
            LogIn
          </Typography>
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default MenuBar;
