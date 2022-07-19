import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Init from "./pages/Init";

function App() {
  
  return (
    <>
    <Init></Init>
    </>
  );
}

export default App;
