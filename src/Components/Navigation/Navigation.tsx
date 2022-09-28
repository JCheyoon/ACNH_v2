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
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuBar from "./MenuBar.component";
import MyLogo from "./MyLogo.component";
import NavCollection from "./NavCollection.component";
import NavEncyclopedias from "./NavEncyclopedias.component";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(max-width:640px)");

  const closeDrawer = () => {
    setTimeout(() => {
      setOpen(false);
    }, 150);
  };
  const buttonSX = {
    fontWeight: 600,
    color: "var(--white)",
    "&:hover, &.active": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };

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
                <Button
                  sx={buttonSX}
                  className={pathname === "/" ? "active" : ""}
                >
                  Island
                </Button>
              </Link>
              <Link to={"/villagers"}>
                <Button
                  sx={buttonSX}
                  className={pathname === "/villagers" ? "active" : ""}
                >
                  Villagers
                </Button>
              </Link>
              <NavEncyclopedias />
              <NavCollection />
              <Box sx={{ flexGrow: 2 }} />
              <Link to={"/auth"}>
                <Button sx={buttonSX}>Login</Button>
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
        <MenuBar closeDrawer={closeDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
