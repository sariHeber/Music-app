import React from "react";
import { useDispatch } from "react-redux";
import Song from "../../new/classes/Song.class";
import AddSong from "../../pages/addSong/AddSong";

const dispatch=useDispatch();

export const addSongs = (mySong: Song) => {

    
    // axios ({method:'POST',url:"http://localhost:8080/songs/addSong" ,data:mySong})
    // .then((respo)=>
    // {
    //     console.log(respo)
    // }).catch((e)=>
    // {
    //     console.log(e)
    // })
    
}

// const addSong=(newSong:Song) => {   return dispatch(AddSong(newSong)); };