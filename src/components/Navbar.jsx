import React, { useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";
import { DataLayerValue } from "../context/DataLayer";

const SEARCH_API = `/search/movie?api_key=`;

const Navbar = () => {
  const [{}, dispatch] = DataLayerValue();
  const [input, setInput] = useState(null);

  const getMovies = async (title) => {
    await axios
      .get(`${SEARCH_API}${process.env.REACT_APP_API_KEY}&query=${title}`)
      .then((res) => {
        dispatch({
          type: "SET_SEARCH",
          search: res.data,
        });
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
    <div className="sm:flex p-[5px] items-center ">
      <div className="flex-[0.20]">
        <div className="flex justify-between items-center">
          <FontAwesomeIcon
            className="flex-[0.2] sm:hidden text-[20px] cursor-pointer pl-[5px]"
            icon={faBookmark}
          />
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
            className="w-[180px] max-w-[180px] flex-[0.6]"
          />
          <FontAwesomeIcon
            className="flex-[0.2] sm:hidden text-[20px] cursor-pointer pr-[5px]"
            icon={faUser}
          />
        </div>
      </div>
      <form className="flex-[0.65] mx-[8px]" onSubmit={submitSearch}>
        <div className="bg-[rgba(236,240,243,.2)] backdrop-blur-[5px] rounded-md p-[5px] p-[10px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
          <button className="bg-transparent" type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#A3A6AF]"
            />
          </button>
          <input
            className="bg-transparent outline-none ml-[10px]"
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      <div className="flex flex-[0.15] justify-center smax:hidden">
        <FontAwesomeIcon
          className="flex-[0.5] text-[20px] cursor-pointer"
          icon={faBookmark}
        />
        <FontAwesomeIcon
          className="flex-[0.5] text-[20px] cursor-pointer"
          icon={faUser}
        />
      </div>
    </div>
  );
};

export default Navbar;
