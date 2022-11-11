import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Search from "./pages/Search";
import MoviePage from "./pages/MoviePage";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="header">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
