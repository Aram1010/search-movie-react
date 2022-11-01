import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DataLayerValue } from "../context/DataLayer";

const SEARCH_API = `/search/movie?api_key=`;

const Navbar = () => {
  const [{ search }, dispatch] = DataLayerValue();
  const [input, setInput] = useState(null);

  const getMovies = async (title) => {
    await axios
      .get(`${SEARCH_API}${process.env.REACT_APP_API_KEY}&query=${title}`)
      .then((res) => {
        dispatch({
          type: "SET_SEARCH",
          search: res.data,
        });
        console.log(search);
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
    <div className="flex">
      <div>Movie</div>
      <form onSubmit={submitSearch}>
        <div className="bg-[#ECF0F3] rounded-md p-[5px] p-[10px] shadow-[rgba(0,0,0,0.05)_0px_6px_24px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px]">
          <button className="" type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#A3A6AF]"
            />
          </button>
          <input
            className="outline-none bg-[#ECF0F3] ml-[10px]"
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
