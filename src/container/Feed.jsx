import React, { useEffect, useState } from "react";
import { DataLayerValue } from "../context/DataLayer";

const Feed = () => {
  const [{ search }, dispatch] = DataLayerValue();
  const [searchedMovies , setSearchedMovies] = useState(null)
  
  useEffect(() => {
    setSearchedMovies(search)
    console.log(search)
  }, [search])

  return <div>Feed</div>;
};

export default Feed;
