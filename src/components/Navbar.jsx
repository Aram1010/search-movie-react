import React, { useState } from "react";
import axios from "../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DataLayerValue } from "../context/DataLayer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const getWindowSize = () => {
  const { innerWidth } = window;

  return { innerWidth };
};

const SEARCH_API = `/search/movie?api_key=`;

const Navbar = () => {
  const [{}, dispatch] = DataLayerValue();
  const [input, setInput] = useState(null);
  const [expand, setExpand] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

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

  const expandSearch_bar = () => {
    setExpand(true);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="">
      <div className="flex p-[5px] items-center m-[auto] justify-between smax:mt-[20px]">
        <div className="flex-[0.50]">
          <img
            src=
            {
              windowSize.innerWidth > 900 ?
              "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
              : "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
            }
            alt=""
            className="w-[180px] max-w-[180px] max-h-[107px] cursor-pointer smax:w-[90px]"
          />
        </div>
        <form
          className="flex-[0] mx-[8px] w-[100px]"
          onSubmit={submitSearch}
          style={
            expand
              ? {
                  flex: "0.5",
                  cursor: "auto",
                  transition: "flex 500ms ease-in-out",
                }
              : {
                  flex: "0",
                  cursor: "pointer",
                }
          }
          onClick={() => expandSearch_bar()}
        >
          <div
            className="flex bg-[rgba(236,240,243,.2)] backdrop-blur-[5px] 
          rounded-[50px] p-[12px] px-[20px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] "
          >
            <button
              className="bg-transparent"
              style={
                expand ? { pointerEvents: "auto" } : { pointerEvents: "none" }
              }
              type="submit"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[#A3A6AF]"
                style={expand ? { color: "#A3A6AF" } : { color: "#222" }}
              />
            </button>
            <input
              className="bg-transparent outline-none ml-[10px] w-[100%]"
              style={expand ? { display: "block" } : { display: "none" }}
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
