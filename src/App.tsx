import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Login } from "./component/login";
import MenuBar from "./component/menubar";
import SignUp from "./component/signup";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
