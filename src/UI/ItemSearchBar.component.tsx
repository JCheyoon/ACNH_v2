import * as React from "react";
import { Paper, InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDebounce } from "../Components/Hooks/CustomHook";
import { useContextGameData } from "../Context/gameDataContext";

const ItemSearchBar = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const { searchByName } = useContextGameData();

  const [keyWord, setKeyWord] = useState<string>("");
  const onTypeKeyWord = useDebounce(setKeyWord, 500);

  useEffect(() => {
    searchByName(keyWord);
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
        sx={{ ml: 1, flex: 1, p: "10px" }}
        placeholder="Search Items by name"
        inputProps={{ "aria-label": "search Items" }}
        onChange={(event) => onTypeKeyWord(event.target.value)}
      />
      <SearchIcon sx={{ mr: 2 }} />
    </Paper>
  );
};

export default ItemSearchBar;
