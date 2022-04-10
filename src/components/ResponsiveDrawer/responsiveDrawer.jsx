import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Fab, InputBase, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

const drawerWidth = 320;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
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

              <Typography
                sx={{ color: "#281b18", ml: "0.75rem", mr: "0.5rem" }}
              >
                Ana Vitória
              </Typography>

              <CircleIcon style={{ color: "#70e000", fontSize: 10 }} />
            </Box>
            <SearchIcon style={{ color: "#281b18" }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            bgcolor: "#f7f8f9",
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            bgcolor: "#f7f8f9",
          }}
          open
        ></Drawer>
      </Box>

      <Box
        sx={{
          width: "100%",
          position: "relative",
          top: "64px",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "0px",
            left: "320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              bgcolor: "#f1f1f1",
              width: "85%",
              py: ".5rem",
              px: "1rem",
              mr: "1rem",
              borderRadius: "36px",
            }}
            placeholder="Write Something"
            inputProps={{ "aria-label": "Write Something" }}
          />
          <Fab
            style={{
              backgroundColor: "#638bfb",
              color: "#fff",
            }}
            aria-label="add"
          >
            <SendIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
