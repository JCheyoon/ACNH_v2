import * as React from "react";
import { Paper, InputBase, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDebounce } from "../Components/Hooks/CustomHook";
import { useContextGameData } from "../Context/gameDataContext";

const VillagersSearchBar = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const { searchByNameAndSpecies } = useContextGameData();

  const [keyWord, setKeyWord] = useState<string>("");
  const onTypeKeyWord = useDebounce(setKeyWord, 500);

  useEffect(() => {
    searchByNameAndSpecies(keyWord);
  }, [keyWord]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: matches ? 380 : 330,
        mt: 5,
        backgroundColor: "var(--light-gray)",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Villagers by name or species"
        inputProps={{ "aria-label": "search Villagers" }}
        onChange={(event) => onTypeKeyWord(event.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default VillagersSearchBar;
