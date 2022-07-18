import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../Old/redux/store";
import Song from "../../../new/classes/Song.class";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function SongLandingPage() {
  const navigate = useNavigate();
  let [songs,setSongs]=useState(Array<Song>);

  return(
    <></>
  )
  
}
export default SongLandingPage;
