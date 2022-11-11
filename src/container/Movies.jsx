import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MovieBottom from "../components/Feed/MovieBottom";
import axios from "../utils/axios";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/w780";

const Movies = ({ genre, title, first, second, withgenres, genre_number }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        getMoviesList();
      }
    };

    handle();

    return () => {
      isRender = true;
    };
  }, []);

  const getMoviesList = () => {
    if (!withgenres) {
      axios
        .get(
          `/movie/${genre}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
        )
        .then((res) => {
          getMovies(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre_number}`
        )
        .then((res) => {
          getMovies(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getMovies = (movies_) => {
    if (!withgenres) {
      movies_.results?.map((movie) => {
        if (movie.genre_ids.length > 1) {
          axios
            .get(
              `/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
            )
            .then((res) => {
              setMovies((current) => [...current, res.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return;
        }
      });
    } else {
      movies_.results?.map((movie) => {
        if (movie.genre_ids.length > 1) {
          axios
            .get(
              `/movie/${movie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
            )
            .then((res) => {
              setMovies((current) => [...current, res.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return;
        }
      });
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide fxl:place-content-center p-[10px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px]">{title}</h2>
      </div>
      <ul className="flex gap-[10px] mt-[20px] mx-[10px] items-center">
        {movies
          ? movies?.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  to={`/movies/${movie.id}`}
                  className="link"
                  state={movie}
                  end
                >
                  <div
                    className="relative w-[500px] h-[300px] bg-cover bg-no-repeat bg-center rounded-[20px] cursor-pointer"
                    style={Object.assign(
                      {},
                      movie.backdrop_path
                        ? {
                            backgroundImage: `url(${
                              IMAGE_PATH + movie.backdrop_path
                            })`,
                          }
                        : {
                            backgroundImage: `url(${"https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"})`,
                          },
                      !first ? { width: "300px" } : null,
                      second ? { width: "250px", height: "350px" } : null,
                      !first && !second ? { width: "300px" } : null
                    )}
                  >
                    <MovieBottom movie={movie} />
                  </div>
                </NavLink>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Movies;
