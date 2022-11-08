import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { DataLayerValue } from "../context/DataLayer";
import { useNavigate } from "react-router-dom";

const SEARCH_API = `/search/movie?api_key=`;

const Navbar = () => {
  const [{}, dispatch] = DataLayerValue();
  const [input, setInput] = useState(null);

  const navigate = useNavigate();

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

    navigate("/movies");
    getMovies(input);
  };

  return (
    <div className="">
      <div className="flex p-[5px] items-center m-[auto] justify-between">
        <div className="flex-[0.50]">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
            className="w-[180px] max-w-[180px] cursor-pointer"
          />
        </div>
        <form
          className="flex-[0.50] mx-[8px] w-[100px]"
          onSubmit={submitSearch}
        >
          <div
            className="flex bg-[rgba(236,240,243,.2)] backdrop-blur-[5px] 
          rounded-[50px] p-[12px] px-[20px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] "
          >
            <button className="bg-transparent" type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[#A3A6AF]"
              />
            </button>
            <input
              className="bg-transparent outline-none ml-[10px] w-[100%]"
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
