import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Poster = ({ searchedMovies, IMAGE_PATH }) => {
  const getRandomArrays = (num) => {
    const shuffled = [...searchedMovies].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const searchedrandoms = getRandomArrays(3);

  return (
    <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide fxl:place-content-center">
      {searchedMovies ? (
        <div className="flex gap-[10px] mt-[20px] mx-[10px] items-center text-[#ffff]">
          {searchedrandoms?.map((search) => (
            <div
              key={search.id}
              className="relative w-[500px] h-[300px] bg-cover bg-no-repeat rounded-[20px] cursor-pointer"
              style={
                search.backdrop_path
                  ? {
                      backgroundImage: `url(${
                        IMAGE_PATH + search.backdrop_path
                      })`,
                    }
                  : {
                      backgroundImage: `url(${
                        "https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
                      })`,
                    }
              }
            >
              <div className="ml-[1rem] mt-[1rem]">
                <h2 className="text-[20px] tracking-wide font-bold">
                  {search.title}
                </h2>
                <p>{search.release_date.split("-")[0]}</p>
              </div>
              <button
                type="button"
                className="bg-[rgba(255,255,255,0.5)] backdrop-sepia-[5px] shadow-[rgba(149,157,165,0.7)_0px_8px_24px]
                p-[12px] px-[18px] text-[#ffff] rounded-[50px] absolute bottom-[1rem] left-[1rem] hover:scale-[1.05] 
                transition duration-100 ease-in-out"
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Poster;