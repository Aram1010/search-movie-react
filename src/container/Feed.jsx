import React from "react";
import Search from "../components/Search";
import Home from "../components/Home";
import { DataLayerValue } from "../context/DataLayer";

const Feed = () => {
  const [{ search }, dispatch] = DataLayerValue();
  return <div>{search ? <Search /> : <Home />}</div>;
};

export default Feed;
