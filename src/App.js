import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
  const [movie, setMovie] = useState("");

  const getMovies = async (title) => {
    await axios
      .get(`?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies("batman");
  }, []);

  return <div>App</div>;
};

export default App;
