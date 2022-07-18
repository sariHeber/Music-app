import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Song from "../../classes/Song.class";
import BackButton from "../../components/BackButton";
import { getAll } from "../../redux/action";

import { RootState } from "../../redux/store";
import SingleSong from "../singleSong";

function SongLandingPage() {
  debugger
    const navigate=useNavigate();
    const dispatch= useDispatch();
    let listSong:
    {
      [x: string]: any;
      s: Song[];}= useSelector((state: RootState) => {debugger
      return state
    });

    const back=()=>{

    }

   useEffect(()=>{
    dispatch(getAll())
   },[])
    console.log(listSong);
    return (<>
        <h1>SongsLandingPage</h1>

        <Link to='/addSong'>add</Link>
        
           {
            listSong.map((item: Song,index:number) => {
                return (
                    <SingleSong song={item} index={index}></SingleSong>
                )
            })
        }
      

      </>)
  }
  export default SongLandingPage;
  
