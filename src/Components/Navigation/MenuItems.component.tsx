import { ListItem, ListItemText, ListItemButton, Box } from "@mui/material";
import * as React from "react";
import { MenuItemProps } from "./MenuEncylopedias.component";

const MenuItems = ({ title, image }: MenuItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <Box sx={{ pr: 3 }}>
          <img src={image} alt="" width="40" height="40" />
        </Box>
        <ListItemText>{title}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItems;
