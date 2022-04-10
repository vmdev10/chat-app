import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 320;

function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#fff",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Ana Vitória" src="/assets/img/ana v.png" />
            </IconButton>

            <Typography sx={{ color: "#281b18", ml: "0.75rem", mr: "0.5rem" }}>
              Ana Vitória
            </Typography>

            <CircleIcon style={{ color: "#70e000", fontSize: 10 }} />
          </Box>
          <SearchIcon style={{ color: "#281b18" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
