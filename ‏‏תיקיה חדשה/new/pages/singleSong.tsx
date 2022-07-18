import React from "react";
import Song from "../classes/Song.class";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSong } from "../redux/action";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import EditIcon from "@mui/icons-material/Edit";
import { Navigate, useNavigate } from "react-router-dom";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

export interface SongI {
  song: Song;
  index: number;
}

function SingleSong({ song }: any) {
  const theme = useTheme();
  const navigate = useNavigate();
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
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom align='left'>
        {song.artistName}
      </Typography>
        <Stack display={"flex"}></Stack>
        <Typography variant="h5" component="div" align="center">
          {song.artist}
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
          deleteSong(String(song.id));
        }}
      >
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => {
          navigate(`/editSong/${song.id}`);
        }}
      >
        <EditIcon sx={{ color: "green", left: 0 }} />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box>
      </Card>
      
      
      
    </>
  );
}
export default SingleSong;

{
  /* <label>Price:</label>
<Box>
    {song.price}
</Box>  */
}
