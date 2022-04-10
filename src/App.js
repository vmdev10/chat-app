import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Chat />
      </Box>
    </div>
  );
}

export default App;
