import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
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
    <div className="">
      <div className="sm:flex p-[5px] items-center m-[auto]">
        <div className="flex-[0.20]">
          <div className="flex justify-between items-center">
            <FontAwesomeIcon
              className="flex-[0.2] sm:hidden text-[20px] cursor-pointer pl-[5px]"
              icon={faBookmark}
            />
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
              alt=""
              className="w-[180px] max-w-[180px] flex-[0.6] cursor-pointer"
            />
            <FontAwesomeIcon
              className="flex-[0.2] sm:hidden text-[20px] cursor-pointer pr-[5px]"
              icon={faUser}
            />
          </div>
        </div>
        <form
          className="flex-[0.70] mx-[8px] 2xl:hidden"
          onSubmit={submitSearch}
        >
          <div className="bg-[rgba(236,240,243,.2)] backdrop-blur-[5px] rounded-[50px] p-[12px] px-[20px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] ">
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
        <div className="flex 2xl:flex-[0.9] flex-[0.1] justify-end mmax:hidden items-center gap-[30px] mx-[10px]">
          <form
            className="flex-[0.90] mx-[8px] sxl:hidden max-w-[600px]"
            onSubmit={submitSearch}
          >
            <div className="bg-[rgba(236,240,243,.2)] backdrop-blur-[5px] rounded-[50px] p-[12px] px-[20px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] ">
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
          <FontAwesomeIcon
            className="flex-[0.01] text-[20px] cursor-pointer"
            icon={faBookmark}
          />
          <FontAwesomeIcon
            className="flex-[0.01] text-[20px] cursor-pointer 2xl:mr-[10px]"
            icon={faUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
