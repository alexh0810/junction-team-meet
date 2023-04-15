import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
      </Routes>
    </div>
  );
}

export default App;
