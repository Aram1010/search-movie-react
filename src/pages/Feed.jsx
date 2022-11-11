import React from "react";
import Movies from "../container/Movies";

const Feed = () => {
  return (
    <div>
      <Movies genre={"popular"} />
    </div>
  );
};

export default Feed;
