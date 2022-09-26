import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { MyLink } from "./NavStyle.style";
import { CollectionType } from "../../Routes/Collections";

const NavCollection = () => {
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
  return (
    <>
      <Button
        sx={{ fontWeight: 600 }}
        color="inherit"
        id="basic-button"
        aria-controls={openNav ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openNav ? "true" : undefined}
        onClick={handleClick}
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
        <MyLink to={`/collections/${CollectionType.HOUSEWARES}`}>
          <MenuItem onClick={handleClose}>Housewares</MenuItem>
        </MyLink>
        <MyLink to={`/collections/${CollectionType.WALL_MOUNTED}`}>
          <MenuItem onClick={handleClose}>WallMounted</MenuItem>
        </MyLink>
        <MyLink to={`/collections/${CollectionType.MISC}`}>
          <MenuItem onClick={handleClose}>Miscellaneous</MenuItem>
        </MyLink>
      </Menu>
    </>
  );
};

export default NavCollection;
