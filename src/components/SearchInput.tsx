import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Container, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { Contact } from "../types/Contact";
import { getAllContacts } from "../services/apiTags";

export default function SearchInput() {
  const [checked, setChecked] = React.useState([1]);
  // const contacts = useGetAllContacts();

  const [contacts, setContacts] = useState<Array<Contact>>([]);
  const [tags, setTags] = useState<Array<string>>([]);
  const [notTags, setNotTags] = useState<Array<string>>([]);
  const [minMessagesSent, setMinMessagesSent] = useState<number>();
  const [minMessagesRecv, setMinMessagesRecv] = useState<number>();
  const [maxMessagesSent, setMaxMessagesSent] = useState<number>();
  const [maxMessagesRecv, setMaxMessagesRecv] = useState<number>();
  const [q, setQ] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    // fetchContacts();
    const fetchContacts = async () => {
      await getAllContacts(
        tags,
        notTags,
        minMessagesSent,
        minMessagesRecv,
        maxMessagesSent,
        maxMessagesRecv,
        q
      )
        .then((response: any) => {
          setContacts(response.data.contacts);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchContacts();
  }, [
    maxMessagesRecv,
    maxMessagesSent,
    minMessagesRecv,
    minMessagesSent,
    notTags,
    q,
    tags,
  ]);
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

  const [contactName, setContactName] = useState("");

  const fetchContacts = async () => {
    await getAllContacts(
      tags,
      notTags,
      minMessagesSent,
      minMessagesRecv,
      maxMessagesSent,
      maxMessagesRecv,
      q
    )
      .then((response: any) => {
        setContacts(response.data.contacts);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const [searchedContacts, setSearchedContacts]: any = useState(contacts);

  //   const filter = (e: any) => {
  //     const keyword = e.target.value;
  //     if (contacts.status === "loaded") {
  //       if (keyword !== "") {
  //         const results: any = contacts.payload.contacts.filter((contact) => {
  //          return contact.name.startsWith(keyword);
  //         });
  //         setSearchedContacts(results);
  //         console.log(searchedContacts);
  //       } else {
  //         setSearchedContacts(contacts.payload.contacts);
  //       }
  //       setContactName(keyword);
  //       console.log(keyword);
  //     }
  //   };

  return (
    <Container>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          borderRadius: "50px",
          backgroundColor: "#f3efef",
          margin: "20px 0 10px 0",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Contacts"
          // inputProps={{ 'aria-label': 'search google maps' }}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          {/* <DirectionsIcon /> */}
        </IconButton>
      </Paper>
      <Container sx={{ flex: 2, width: "100%", border: "2px solid blue" }}>
        {/* {contacts.status === "loaded" && (
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700 }}>
            {`All Contacts (${contacts.payload.contacts.length})`}
          </Typography>
        )} */}

        <List
          dense
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        >
          {/* {contacts.status === "loading" && <div>Loading...</div>} */}
          {success &&
            contacts.map((contact: Contact, index: number) => {
              // const labelId = `checkbox-list-secondary-label-${contact}`;

              return (
                <div>
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
                        // inputProps={{ "aria-labelledby": labelId }}
                      />
                      <ListItemAvatar>
                        <Avatar alt={contact.name} src={contact.img?.url} />
                      </ListItemAvatar>

                      <ListItemText
                        // id={labelId}
                        primary={contact.name}
                        secondary={`+ ${contact.phoneNumber}`}
                      />
                      {contact.tags.map((value, index) => (
                        <Chip
                          key={index}
                          label={value.name}
                          sx={{ margin: "5px" }}
                        />
                      ))}

                      <AddCircleIcon color="success" />
                    </ListItemButton>
                  </ListItem>
                </div>
              );
            })}
        </List>
      </Container>
    </Container>
  );
}
