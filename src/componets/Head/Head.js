import React from "react";
import "./Head.css";
import Search from "../Search/Search";
import Reset from "../reset/reset";

const Heading = ({ setTrend, search, setSearch, reset }) => {
  return (
    <>
      <div className="Heading-container">
        <Search setTrend={setTrend} search={search} setSearch={setSearch} />
        <Reset reset={reset} />
        <div className="clickMe">Click to save!</div>
      </div>
    </>
  );
};

export default Heading;
