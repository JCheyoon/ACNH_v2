import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { MyLink } from "./NavStyle.style";
import { CollectionType } from "../../Routes/Collections";
import { useLocation } from "react-router-dom";

const NavCollection = () => {
  const { pathname } = useLocation();

  const [collectionEl, setCollectionEl] = React.useState<null | HTMLElement>(
    null
  );
  const openNav = Boolean(collectionEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCollectionEl(event.currentTarget);
  };
  const handleClose = () => {
    setCollectionEl(null);
  };

  const buttonSX = {
    fontWeight: 600,
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };
  return (
    <>
      <Button
        sx={buttonSX}
        color="inherit"
        id="basic-button"
        aria-controls={openNav ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openNav ? "true" : undefined}
        onClick={handleClick}
        className={pathname.startsWith("/collections") ? "active" : ""}
      >
        Collections
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={collectionEl}
        open={openNav}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MyLink to={`/collections/${CollectionType.FURNITURE}`}>
          <MenuItem onClick={handleClose}>Furniture</MenuItem>
        </MyLink>
        <MyLink to={`/collections/${CollectionType.INTERIOR}`}>
          <MenuItem onClick={handleClose}>Interior</MenuItem>
        </MyLink>
        <MyLink to={`/collections/${CollectionType.ITEMS}`}>
          <MenuItem onClick={handleClose}>Miscellaneous</MenuItem>
        </MyLink>
      </Menu>
    </>
  );
};

export default NavCollection;
