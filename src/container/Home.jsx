import React from "react";
import Search from "../pages/Search";
import Feed from "../pages/Feed";
import { DataLayerValue } from "../context/DataLayer";

const Home = () => {
  const [{ search }, dispatch] = DataLayerValue();
  return <div>{search ? <Search /> : <Feed />}</div>;
};

export default Home;
