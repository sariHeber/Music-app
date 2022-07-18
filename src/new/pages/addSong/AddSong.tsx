import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Gener } from "../../classes/Gener.enum";
import Song from "../../classes/Song.class";

const AddSong = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState<Song>({
    title: "",
    artist: "",
    length: 0,
    price: 0,
    genre: Gener.CLASSICAL,
  });
  const addNewSong = () => {
    dispatch(props.addSong(newSong));
  };
  const genreArr = ["POP", "ROCK", "CLASSICAL", "RAP"];
  return (
    <>
      <p>addSong</p>
      <form name="addNewSong" onSubmit={addNewSong}>
        <br></br>
        <input
          placeholder="title"
          id="title"
          onChange={(e) => {
            setNewSong({ ...newSong, title: e.target.value });
          }}
        ></input>
        <br></br>
        <input
          placeholder="artistName"
          id="artistName"
          onChange={(e) => {
            setNewSong({ ...newSong, artist: e.target.value });
          }}
        ></input>
        <br></br>
        <input
          placeholder="length"
          id="length"
          onChange={(e) => {
            setNewSong({ ...newSong, length: parseFloat(e.target.value) });
          }}
        ></input>
        <br></br>
        <input
          placeholder="price"
          id="price"
          onChange={(e) => {
            setNewSong({ ...newSong, price: parseInt(e.target.value) });
          }}
        ></input>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            defaultValue={""}
            sx={{
              backgroundColor: "rgba(254, 254, 254, 0.877)",
              ":hover": { background: "rgba(254, 254, 254, 0.877)" },
            }}
            onChange={(e) => {
              setNewSong({
                ...newSong,
                genre: e.target.value as unknown as Gener,
              });
            }}
          >
            {genreArr.map((genre: string) => {
              return (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default AddSong;
