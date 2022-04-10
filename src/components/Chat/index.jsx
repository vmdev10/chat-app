import React from "react";

import Box from "@mui/material/Box";
import { Fab, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Chat(props) {
  return (
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
  );
}

export default Chat;
