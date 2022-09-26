import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuBar from "./MenuBar.component";
import MyLogo from "./MyLogo.component";
import NavCollection from "./NavCollection.component";
import NavEncyclopedias from "./NavEncyclopedias.component";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(max-width:640px)");

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
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
          ) : null}
          <MyLogo />
          {matches ? null : (
            <>
              <Link to={"/"}>
                <Button sx={{ fontWeight: 600 }} color="info">
                  Island
                </Button>
              </Link>
              <Link to={"/villagers"}>
                <Button sx={{ fontWeight: 600 }} color="info">
                  Villagers
                </Button>
              </Link>
              <NavEncyclopedias />
              <NavCollection />
              <Box sx={{ flexGrow: 2 }} />
              <Link to={"/auth"}>
                <Button sx={{ fontWeight: 600 }} color="info">
                  Login
                </Button>
              </Link>
            </>
          )}
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
