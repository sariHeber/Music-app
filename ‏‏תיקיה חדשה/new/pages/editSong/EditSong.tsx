import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Song from "../../classes/Song.class";
import { editSong } from "../../redux/action";
import { RootState } from "../../redux/store";

const EditSong = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
   let s: Song
   = useSelector((state: RootState) => {
    let v=state.find((x: Song) => x.id===  id);
    return v;
  });


  const [newSong, setNewSong] = useState(s);

  const saveEdit = async (event: any) => {
    event.preventDefault();
    dispatch(editSong({ ...newSong }));
    navigate("/");
  };

  return (
    <>
      <form onSubmit={saveEdit}>
        <TextField
          id="standard-basic"
          label="artist"
          type="text"
          variant="standard"
          value={newSong.artistName}
          onChange={(e) => {
            setNewSong({ ...newSong, artistName: e.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="artist"
          type="text"
          variant="standard"
          value={newSong.title}
          onChange={(e) => {
            setNewSong({ ...newSong, title: e.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="artist"
          type="text"
          variant="standard"
          value={newSong.length}
          onChange={(e) => {
            setNewSong({ ...newSong, length: Number(e.target.value) });
          }}
        />
        <TextField
          id="standard-basic"
          label="artist"
          type="text"
          variant="standard"
          value={newSong.price}
          onChange={(e) => {
            setNewSong({ ...newSong, price: Number(e.target.value) });
          }}
        />
        <button type='submit'>submit</button>
      </form>
    </>
  );
};
export default EditSong;
