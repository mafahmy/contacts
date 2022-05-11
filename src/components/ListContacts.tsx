import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useGetAllContacts from "../services/api";

export default function ListContacts() {
  const [checked, setChecked] = React.useState([1]);
  const contacts = useGetAllContacts();

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log(contacts);

  return (
    <Container>
      <List
        dense
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        {contacts.status === "loading" && <div>Loading...</div>}
        {contacts.status === "loaded" &&
          contacts.payload.contacts.map((contact, index) => {
            const labelId = `checkbox-list-secondary-label-${contact}`;
            return (
              <ListItem
                key={contact.id}
                // secondaryAction={
                //     <Checkbox
                //     edge="end"
                //     onChange={handleToggle(value)}
                //     checked={checked.indexOf(value) !== -1}
                //     inputProps={{ 'aria-labelledby': labelId }}
                //   />
                // }
                disablePadding
              >
                <ListItemButton>
                  <Checkbox
                    // edge="end"
                    onChange={handleToggle(index)}
                    checked={checked.indexOf(index) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                  <ListItemAvatar>
                    <Avatar alt={contact.name} src={contact.img?.url} />
                  </ListItemAvatar>

                  <ListItemText id={labelId} primary={contact.name} />
                  <AddCircleIcon color="success" />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
}
