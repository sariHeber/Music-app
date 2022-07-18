import {
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Song from "../../classes/Song.class";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditSong from "../editSong/EditSong";

function SingleSong(props: any) {
  const navigate = useNavigate();
  const [song, setSong] = useState(props.song);
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          borderColor: "black",
          borderRadius: "2px",
          marginTop: 2,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <Typography
          sx={{ fontSize: 25 }}
          color="text.secondary"
          gutterBottom
          align="left"
        >
          {song.title}
        </Typography>
        <Typography
          sx={{ fontSize: 25 }}
          color="text.secondary"
          gutterBottom
          align="left"
        >
          {song.artistName}
        </Typography>
        <Stack display={"flex"}></Stack>
        <Typography variant="h5" component="div" align="center">
          {song.title}
        </Typography>
        <Typography variant="h5" component="div" align="center">
          {Number(song.length)}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 18 }}
          color="text.secondary"
          align="right"
        >
          ₪{song.price}
        </Typography>
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.deleteSong(song.id);
          }}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton
          key="edit-btn"
          size="large"
          sx={{
            margin: 2,
            background: "rgb(206, 8, 58)",
            ":hover": { background: "rgb(53 44 173)" },
          }}
          onClick={() => {
            navigate ("/edit/" + song.id) ;
          }}
        >edit
          <BorderColorIcon />
        </IconButton>
      </Card>
    </>
  );
}
export default SingleSong;
