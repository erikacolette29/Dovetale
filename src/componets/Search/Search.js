import React from "react";
import axios from "axios";
import "./Search.css";

const Search = ({ search, setSearch, setTrend }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "ri3d49thPr5bgwRV8WMuaCkvz2TjofSj",
        q: search,
        limit: 100,
      },
    });
    setTrend(results.data.data);
  };

  return (
    <>
      <form className="container-form">
        <input
          className="form-control"
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
        />
        <button className="form-btn btn " onClick={handleSubmit} type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default Search;
