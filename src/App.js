import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default App;
