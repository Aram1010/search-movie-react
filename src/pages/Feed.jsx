import React from "react";
import Movies from "../container/Movies";

const Feed = () => {
  return (
    <div className="mt-[20px]">
      <Movies genre={"popular"} title={"Popular Movies"} first={true} />
      <Movies genre={"top_rated"} title={"Top Rated"} second={true} />
      <Movies genre={"upcoming"} title={"Upcoming"} />
      <Movies title={"Action"} withgenres={true} genre_number={28} />
      <Movies title={"Comedy"} withgenres={true} genre_number={35} />
      <Movies title={"Horror"} withgenres={true} genre_number={27} />
      <Movies title={"Documentaries"} withgenres={true} genre_number={99} />
    </div>
  );
};

export default Feed;
