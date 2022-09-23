import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, SwipeableDrawer } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MenuBar from "./MenuBar";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <MenuBar />
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
