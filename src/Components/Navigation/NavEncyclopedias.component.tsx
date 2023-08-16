import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { MyLink } from "./NavStyle.style";
import { EncyclopediaType } from "../../Routes/Encyclopedias";
import { useLocation } from "react-router-dom";

const NavEncyclopedias = () => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openNav = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonSX = {
    fontWeight: 600,
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };

  return (
    <div>
      <Button
        sx={buttonSX}
        color="inherit"
        id="basic-button"
        className={pathname.startsWith("/encyclopedia") ? "active" : ""}
        aria-controls={openNav ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openNav ? "true" : undefined}
        onClick={handleClick}
      >
        Encyclopedias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openNav}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MyLink to={`/encyclopedia/${EncyclopediaType.BUGS}`}>
          <MenuItem onClick={handleClose}>Bugs</MenuItem>
        </MyLink>
        <MyLink to={`/encyclopedia/${EncyclopediaType.FISH}`}>
          <MenuItem onClick={handleClose}>Fish</MenuItem>
        </MyLink>
        <MyLink to={`/encyclopedia/${EncyclopediaType.SEA_CREATURES}`}>
          <MenuItem onClick={handleClose}>Sea Creatures</MenuItem>
        </MyLink>
        <MyLink to={`/encyclopedia/${EncyclopediaType.FOSSILS}/individuals`}>
          <MenuItem onClick={handleClose}>Fossils</MenuItem>
        </MyLink>
        <MyLink to={`/encyclopedia/${EncyclopediaType.ARTS}`}>
          <MenuItem onClick={handleClose}>Arts</MenuItem>
        </MyLink>
      </Menu>
    </div>
  );
};
export default NavEncyclopedias;
