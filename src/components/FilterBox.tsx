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
  Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { Tag } from "../types/Tag";
import { getAllTags } from "../services/apiTags";
import { getRegisteredStyles } from "@emotion/utils";
import SearchInput from "./SearchInput";

const ITEM_HEIGHT = 48;
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

const FilterBox: React.FC = () => {
  const [checked, setChecked] = React.useState([0]);
  const [success, setSucess] = useState<Boolean>(false);
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [includeTags, setIncludeTags] = useState<string[]>([]);
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
  console.log(tags);
  console.log(includeTags);

  return (
    <Container disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
      <Container  sx={{ flex: 1, width: "100%" }}>
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
            <Typography>Include Tags :</Typography>
            <FormControl sx={{ m: 2, width: 200, height: 300 }}>
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
          <Typography>Exclude Tags:</Typography>
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
          Messages
        </Box>
      </Container>
      <SearchInput includeTags={includeTags}/>
    </Container>
  );
};
export default FilterBox;
