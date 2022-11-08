import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Search from "./container/Search";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="header">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;
