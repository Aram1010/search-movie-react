import React from "react";
import Feed from "./container/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="feed">
        <Feed />
      </div>
    </div>
  );
};

export default App;
