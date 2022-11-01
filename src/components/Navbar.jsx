import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

const Navbar = () => {
  const [movie, setMovie] = useState("");
  const [input, setInput] = useState(null);

  const getMovies = async (title) => {
    await axios
      .get(`?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitSearch = (e) => {
    e.preventDefault();

    getMovies(input);
  };
  return (
    <div className="bg-black flex-[0.8]">
      <div>Movie</div>
      <form onSubmit={submitSearch}>
        <input
          //className="outline-none bg-[#ECF0F3] rounded-md p-[5px] p-[10px]"
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
