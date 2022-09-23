import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import * as React from "react";

const MenuBar = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="ACNH" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Island" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Villagers" />
        </ListItemButton>
      </ListItem>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Encyclopedia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {["Bug", "Fish", "Sea Creatures", "Fossils", "Arts"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {["Houseware", "Wallmount", "Miscellaneous"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{<InboxIcon />}</ListItemIcon>
          <ListItemText primary="Sign in" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MenuBar;
