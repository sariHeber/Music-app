import React, { useRef, useState } from "react";
import { Gener } from "../../new/classes/Gener.enum";
import Song from "../../new/classes/Song.class";

function AddSong(){

const [newSong, setNewSong] = useState<Song>({
        id: "",
        title: "",
        artistName: "",
        length: 0,
        price: 0,
        gener: Gener.CLASSICAL,
        
    })
    let artistRef=useRef();
    let id=useRef();
    let title=useRef();
    let gener=useRef();
    let length=useRef();
    let price=useRef();

 return(
    <>
    <input type="text" name="id" value='id'/>
    <input type="text" name="title" value='title'/>
    <input type="text" name="artistName" value='artistName'/>
    <input type="number" name="length" value='length'/>
    <input type="number" name="price" value='price'/>
    </>
 )   
}
export default AddSong;
