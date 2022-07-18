import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Gener } from "../../new/classes/Gener.enum";
import Song from "../../new/classes/Song.class";
import { editSong } from "../../Old/redux/action";
import { RootState } from "../../Old/redux/store";

const EditSong = (props: String|any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let { id } = useParams();
  console.log(id);
   let s: Song
   = useSelector((state: RootState) => {
    debugger
    let v=state.find((x: Song) => x.id===  id);
    console.log(v);
    return v;
  });

  useEffect(() => {
    return setNewSong({ ...s });
}, [])

  const [newSong, setNewSong] = useState(s);
  

  useEffect(() => {
    debugger;
    setNewSong(s);
  }, []);

  const saveEdit = async (event: any) => {
    debugger
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
        <button type='submit'>submit</button>
        {/* <input type='submit'>submit</input> */}
      </form>
      <button>EditSong</button>
    </>
  );
};
export default EditSong;
