import { Button, ButtonGroup } from "@mui/material";
import { useContextGameData } from "../Context/gameDataContext";

const VillagersFilter = () => {
  const { filterByPersonality } = useContextGameData();
  return (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{ d: "flex", flexWrap: "wrap" }}
    >
      {[
        "All",
        "Cranky",
        "Jock",
        "Lazy",
        "Normal",
        "Peppy",
        "Smug",
        "Snooty",
        "Uchi",
      ].map((personality, index) => (
        <Button
          onClick={() => filterByPersonality(personality)}
          key={index}
          sx={{ fontWeight: 600 }}
        >
          {personality}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default VillagersFilter;
