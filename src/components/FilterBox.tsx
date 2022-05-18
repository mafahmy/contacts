import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { Tag } from "../types/Tag";
import { getAllTags } from "../services/apiTags";
import { getRegisteredStyles } from "@emotion/utils";
import SearchInput from "./SearchInput";

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, includeTags: readonly string[], theme: Theme) {
  return {
    fontWeight:
      includeTags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesEx(
  name: string,
  excludeTags: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      excludeTags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterBox: React.FC = () => {
  const [checked, setChecked] = React.useState([0]);
  const [success, setSucess] = useState<Boolean>(false);
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [includeTags, setIncludeTags] = useState<string[]>([]);
  const [excludeTags, setExcludeTags] = useState<string[]>([]);
  const [minMessagesSent, setMinMessagesSent] = useState("");
  const [maxMessagesSent, setMaxMessagesSent] = useState("");
  const [minMessagesRecv, setMinMessagesRecv] = useState("");
  const [maxMessagesRecv, setMaxMessagesRecv] = useState("");
  const [strings, setString] = useState("");
  const theme = useTheme();

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    await getAllTags()
      .then((response: any) => {
        setTags(response.data.tags);
        setSucess(true);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

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
  const handleChange = (event: SelectChangeEvent<typeof includeTags>) => {
    const {
      target: { value },
    } = event;
    setIncludeTags(typeof value === "string" ? value.split(" ") : value);
  };
  const handleChangeExTags = (event: SelectChangeEvent<typeof excludeTags>) => {
    const {
      target: { value },
    } = event;
    setExcludeTags(typeof value === "string" ? value.split(" ") : value);
  };
  console.log(tags);
  console.log(includeTags);

  return (
    <Container
      disableGutters
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      
      <Container sx={{ flex: 1, width: "100%", marginTop:"75px"}}>
        <Container sx={{ }}>
        <Box
          sx={{
            width: "200px",

            backgroundColor: "white",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography 
            sx={{  }}>Include Tags</Typography> 
            <FormControl sx={{ m: 2, width: 200, height: 200 }}>
              <InputLabel id="demo-multiple-chip-label">Tags:</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={includeTags}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {tags.map((tag) => (
                  <MenuItem
                    key={tag.name}
                    value={tag.name}
                    style={getStyles(tag.name, includeTags, theme)}
                  >
                    {tag.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* <Button disabled>Clear All</Button> */}
        </Box>
        <Box
          sx={{
            width: "200px",

            backgroundColor: "white",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography>Exclude Tags:</Typography>
            <FormControl sx={{ m: 2, width: 200, height: 200 }}>
              <InputLabel id="demo-multiple-chip-label">Tags:</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={excludeTags}
                onChange={handleChangeExTags}
                input={<OutlinedInput id="select-multiple-chip" label="chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {tags.map((tag) => (
                  <MenuItem
                    key={tag.name}
                    value={tag.name}
                    style={getStylesEx(tag.name, excludeTags, theme)}
                  >
                    {tag.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box
          sx={{
            width: "200px",
            marginBottom: "50px",
            backgroundColor: "white",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            // display: "flex",
            // justifyContent: "space-between",
          }}
        >
          <Typography>messages Sent:</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "15ch" },
              display: "flex",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="min"
              variant="outlined"
              value={minMessagesSent}
              onChange={(e) => setMinMessagesSent(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="max"
              variant="outlined"
              inputProps={{ inputMode: 'numeric', pattern: '[0-1000]*' }}
              value={maxMessagesSent}
              onChange={(e) => setMaxMessagesSent(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "200px",

            backgroundColor: "white",
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            // display: "flex",
            // justifyContent: "space-between",
          }}
        >
          <Typography>messages Recieved:</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "15ch" },
              display: "flex",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="min"
              variant="outlined"
              value={minMessagesRecv}
              onChange={(e) => setMinMessagesRecv(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="max"
              variant="outlined"
              value={maxMessagesRecv}
              onChange={(e) => setMaxMessagesRecv(e.target.value)}
            />
          </Box>
        </Box>
        </Container>
      </Container>
      <SearchInput
        includeTags={includeTags}
        excludeTags={excludeTags}
        minMessagesSent={minMessagesSent}
        maxMessagesSent={maxMessagesSent}
        minMessagesRecv={minMessagesRecv}
        maxMessagesRecv={maxMessagesRecv}
      />
    </Container>
  );
};
export default FilterBox;
