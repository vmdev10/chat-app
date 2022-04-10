import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Fab, InputBase } from "@mui/material";
import { uid } from "uid";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../utils/firebase";

function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessages(event.target.value);
  };

  // write
  const writeMessageData = () => {
    const uuid = uid();

    set(ref(db, `chatApp/messages'`), {
      uuid,
      message,
    });

    setMessage("");
  };

  // // read
  // useEffect(() => {
  //   onValue(
  //     ref(db, (snapshot) => {
  //       const data = snapshot.val();

  //       if (data !== null) {
  //         Object.values(data).map((message) => {
  //           setMessages((oldArray) => [...oldArray, message]);
  //         });
  //       }
  //     })
  //   );
  // }, []);

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
          onChange={(event) => handleChange(event)}
          value={message}
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
          onClick={() => writeMessageData()}
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
