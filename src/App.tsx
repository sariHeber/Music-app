import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import SongLandingPage from "./new/pages/songsLandingPage/SongLandingPage";
import AddSong from "./new/pages/addSong/AddSong";
import EditSong from "./new/pages/editSong/EditSong";
import Init from "./new/pages/Init";

function App() {
  
  return (
    <>
    <Init></Init>
        <Routes>
          
          {/* <Route path="/" element={<SongLandingPage />}></Route>
          <Route path="/addSong" element={<AddSong />} />
          <Route path="/editSong/:id" element={<EditSong />} /> */}
        </Routes>
        
    {/* <Route path="/" element={<Test/>}></Route> */}
    
    </>
  );
}

export default App;
