import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Feed />
    </div>
  );
};

export default App;
