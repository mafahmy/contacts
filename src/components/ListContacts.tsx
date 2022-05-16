 import React, { useEffect, useState } from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Checkbox from "@mui/material/Checkbox";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import Avatar from "@mui/material/Avatar";
// import { Container, Typography } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";



// export default function ListContacts() {
//   const [checked, setChecked] = React.useState([1]);
   

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };
//   // console.log(contacts);

//   // if (contacts.status === "loaded") {
//   //   const contactsWithTags = contacts.payload.contacts.filter(
//   //     (contact) => contact.tags.length > 0
//   //   );
//   //   // console.log(contactsWithTags[1].tags[0].name)

//   //   const tagsOnly= contactsWithTags.map((value,index) => value.tags.map((x,index) => x.name) )
//   //   const arrayofTags = [];
//   //   arrayofTags.push(...tagsOnly)
//   //   console.log(arrayofTags)
    
//   // }

//   return (
//     <Container sx={{ flex: 2, width: "100%", border: "2px solid blue" }}>
//       {/* {contacts.status === "loaded" && (
//         <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700 }}>
//           {`All Contacts (${contacts.payload.contacts.length})`}
//         </Typography>
//       )} */}
      
//       <List
//         dense
//         sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
//       >
//         {contacts.status === "loading" && <div>Loading...</div>}
//         {contacts.status === "loaded" &&
//           contacts.payload.contacts.map((contact, index) => {
//             // const labelId = `checkbox-list-secondary-label-${contact}`;

//             return (
//               <div>
//                 <ListItem
//                   key={contact.id}
//                   // secondaryAction={
//                   //     <Checkbox
//                   //     edge="end"
//                   //     onChange={handleToggle(value)}
//                   //     checked={checked.indexOf(value) !== -1}
//                   //     inputProps={{ 'aria-labelledby': labelId }}
//                   //   />
//                   // }
//                   disablePadding
//                 >
//                   <ListItemButton>
//                     <Checkbox
//                       // edge="end"
//                       onChange={handleToggle(index)}
//                       checked={checked.indexOf(index) !== -1}
//                       // inputProps={{ "aria-labelledby": labelId }}
//                     />
//                     <ListItemAvatar>
//                       <Avatar alt={contact.name} src={contact.img?.url} />
//                     </ListItemAvatar>

//                     <ListItemText
//                       // id={labelId}
//                       primary={contact.name}
//                       secondary={`+ ${contact.phoneNumber}`}
//                     />
//                     {/* {contact.tags.map((value, index) => (
//                       <Chip
//                         key={index}
//                         label={value.name}
//                         sx={{ margin: "5px" }}
//                       />
//                     ))} */}

//                     <AddCircleIcon color="success" />
//                   </ListItemButton>
//                 </ListItem>
//               </div>
//             );
//           })}
//       </List>
//     </Container>
//   );
// }
