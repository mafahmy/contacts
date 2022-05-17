import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FilterBox from "./components/FilterBox";
import { Container } from "@mui/material";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Container sx={{ display: "flex", border: "2px solid gray" }}>
      <FilterBox />
      {/* <SearchInput /> */}
    </Container>
  );
}

export default App;
