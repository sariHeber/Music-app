import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Song from "../../new/classes/Song.class";
import { RootState } from "../../Old/redux/store";
import songReducer from "../../Old/redux/reducer";
import store from "../../Old/redux/store";

function SongLandingPage() {
    const navigate=useNavigate();
    let listSong:
    {
      [x: string]: any;
      s: Song[];}= useSelector((state: RootState) => {
      return state
    });
    console.log(listSong);
    return (<>
        <h1>SongsLandingPage</h1>
           <h3>:studio_microphone::microphone:!!!!רשימת השירים שלנו</h3>
              {listSong && listSong.map((song:Song) => {
                  return (<>
                      <div style={{ fontSize: '120%', width: '220', height: '350px', margin: '2%', display: 'inline-block' }}>
                          <p>name: {song.title}</p>
                          <p>artist: {song.artistName}</p>
                          <button onClick={() => {  navigate(`/editSong/${song.id}`) }}>edit</button>
                          {/* <p>length: {song.length} minuts</p> */}
                          </div>
                          <Link to='/addSong'>add</Link>
                      </>)
         })}
      </>)
  }
  export default SongLandingPage;


  
