import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Gener } from "../../classes/Gener.enum";
import Song from "../../classes/Song.class";
import { addSong } from "../../redux/action";
import { RootState } from "../../redux/store";
function AddSong(){
   
    const [newSong, setNewSong] = useState<Song>({
        id: "0",
        title: "",
        artistName: "",
        length: 0,
        price: 0,
        gener: Gener.CLASSICAL
    })
    const navigate= useNavigate();

    let songs:{s:Song[]} = useSelector((state:RootState) => {debugger; return state.songsList});
    const addNewSong = (e:any) => {
        debugger
        e.preventDefault();
          dispatch(addSong(newSong));
          navigate('/');
    }
    let dispatch=useDispatch()
    
    return(
        <>
        <button>AddSong</button>
        <form name="addNewSong" onSubmit={addNewSong}>
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


