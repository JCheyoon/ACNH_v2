import { Button, ButtonGroup } from "@mui/material";

const VillagersFilter = () => {
  return (
    <ButtonGroup variant="text" aria-label="outlined primary button group">
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
        <Button key={index} sx={{ fontWeight: 600 }}>
          {personality}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default VillagersFilter;
