import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
  const [movie, setMovie] = useState("");
  const [input, setInput] = useState(null)

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

  const submitSearch = (e) => {
    e.preventDefault()

    getMovies(input);
  }

  return <div className="app">
    
    <form onSubmit={submitSearch}>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button type="submit">search</button>
    </form>
  </div>;
};

export default App;
