import React from "react";
import { Route, Routes } from "react-router-dom";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/teams" element={<Home />}></Route>
        <Route path="/teams/apply/:teamId" element={<Apply />}></Route>
      </Routes>
    </div>
  );
}

export default App;
