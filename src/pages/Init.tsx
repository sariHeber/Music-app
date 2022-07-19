import React from "react";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { add, deleteS, edit, getAll, getSongByArtist } from "../Api/SongsApi";
import { Gener } from "../classes/Gener.enum";
import Song from "../classes/Song.class";
import { GetAllSongs } from "../redux/action";
import { RootState } from "../redux/store";
import AddSong from "./addSong/AddSong";
import EditSong from "./editSong/EditSong";
import SongLandingPage from "./songsLandingPage/SongLandingPage";

function Init() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState(new Array<Song>);
  const [byArtist, setByArtist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, [])
  const listSong: Song[] = useSelector((state: any) => state.songReducer.songsList);
  const addSong: any = (song: Song) => {
    dispatch(add(song));
  }
  const editSong: any = (song: Song) => {
    dispatch(edit(song));
  }
  const deleteSong = (id: String) => {
    dispatch(deleteS(id));
  }
  const searchSong = (artist: string) => {
    dispatch(getSongByArtist(artist));
  }

  return (
    <div>
      <Routes>
        {listSong && <Route path="/" element={<SongLandingPage songs={listSong} deleteSong={deleteSong} editSong={editSong} byArtist={searchSong}></SongLandingPage>} />}
        <Route path="/new" element={<AddSong songs={listSong} addSong={addSong}></AddSong>} />
        <Route path="/edit/:id" element={<EditSong songs={listSong} editSong={editSong} ></EditSong>} />
      </Routes>
      <button onClick={() => { navigate('/') }}>home</button>
      <button onClick={() => { navigate('/new') }}>add</button>

    </div>
  );
}
export default Init;