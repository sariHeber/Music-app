import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import EditSong from "../../pages/editSong/EditSong";
import Song from "../../new/classes/Song.class";
import { RootState } from "../../new/redux/store";
import SongLandingPage from "./songsLandingPage/SongsLandingPage";
import { Gener } from "../classes/Gener";
import AddSong from "./addSong/AddSong";


  export interface SongI{
  song:Song
 }
function Test() {

    const navigate = useNavigate()
    let listSong: {
      s: Song[];
    } = useSelector((state: RootState) => {
      return state;
    });
    //const [songs, setSongs] = useState(listSong.s)
    // useEffect(()=>{
    //     return setSongs(listSong.s);
    // },[])
    const [song, setSong] = useState(new Song('','','',Gener.CLASSICAL,0,0));
    return (
      <div>
        <Routes>
            <Route path="/" element={<SongLandingPage/>} />
            <Route path="/songs">
              <Route path="/songs" element={<SongLandingPage />} />
              <Route path="/songs/new" element={<AddSong song={song}></AddSong>} />
              <Route path="/songs/edit/:id" element={<EditSong></EditSong>}/>
            </Route>
          </Routes>
          <button onClick={() => { navigate('/') }}>home</button>
          <button onClick={() => { navigate('/songs') }}>view all</button>
          <button onClick={() => { navigate('/songs/new') }}>add</button>
          <button onClick={() => { navigate('/songs/edit/123') }}>edit</button>
      </div>
    );
  }
  export default Test;