import { PinDropSharp } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Song from "../../classes/Song.class";
import SingleSong from "./SingleSong";
import SearchIcon from "@mui/icons-material/Search";
import BackButton from "../../components/BackButton";

function SongLandingPage(props: any) {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState(props.songs);
  const [byArtist, setByArtist] = useState(false);
  const [artist, setArtist] = useState("");
  return (
    <>
      <h1>SongsLandingPage</h1>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Artist Name"
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <IconButton
        key="getSongByArtist"
        sx={{
          marginLeft: 2,
          background: "rgb(206, 8, 58)",
          ":hover": { background: "rgb(53 44 173)" },
        }}
        onClick={() => {
          props.byArtist(artist);
        }}
      >
        <SearchIcon />
      </IconButton>
      {songs.map((item: Song, index: number) => {
        return (
          <SingleSong
            song={item}
            index={index}
            deleteSong={props.deleteSong}
            editSong={props.editSong}
          ></SingleSong>
        );
      })}
      <BackButton></BackButton>
    </>
  );
}
export default SongLandingPage;
