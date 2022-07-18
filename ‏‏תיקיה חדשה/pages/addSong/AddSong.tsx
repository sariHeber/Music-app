import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gener } from "../../new/classes/Gener.enum";
import Song from "../../new/classes/Song.class";
import { addSong } from "../../Old/redux/action";
import { addSongs } from "../../Old/api/songs.api";
import { RootState } from "../../Old/redux/store";



function AddSong(){

    const [newSong, setNewSong] = useState<Song>({
        id: "0",
        title: "",
        artistName: "",
        length: 0,
        price: 0,
        //genre: "",
        gener: Gener.CLASSICAL



    })

    let songs:{s:Song[]} = useSelector((state:RootState) => {debugger; return state.songsList});
    const addNewSong = (e:any) => {
        debugger
        e.preventDefault();
          dispatch(addSong(newSong));
    }
    let dispatch=useDispatch()
    
    return(
        <>
        <button>AddSong</button>
        <form name="addNewSong" onSubmit={addNewSong}>
        
        {/* <input  placeholder="id" id="id" onChange={(val)=>{ setNewSong({ ...newSong, id: val.target})}}></input> */}
           <br></br>
           <input  placeholder="title" id="title" onChange={(e) => { setNewSong({ ...newSong, title: e.target.value }) }}></input>
           <br></br>
           <input  placeholder="artistName" id="artistName" onChange={(e) => { setNewSong({ ...newSong, artistName: e.target.value }) }}></input>
           <br></br>
           <input  placeholder="length" id="length" onChange={(e) => { setNewSong({ ...newSong, length: parseInt(e.target.value) }) }}></input>
           <br></br>
           <input  placeholder="price" id="price" onChange={(e) => { setNewSong({ ...newSong, price: parseInt(e.target.value) }) }}></input>

           <input  type="submit"   ></input>

        </form>

        </>
    )
}
export default AddSong;