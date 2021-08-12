import React, { useState, useEffect } from "react";
import "./Trend.css";
import Trending from "../../services/trending-api";
import Heading from "../Head/Head";
import Giphys from "../Giphys/Giphy";

export default function Trends() {
  const [trend, setTrend] = useState("");
  const [search, setSearch] = useState("");

  async function getTrends() {
    const trendData = await Trending();
    console.log(trendData);
    setTrend(trendData.data.data);
  }

  useEffect(() => {
    getTrends();
  }, []);

  const onReset = () => {
    setTrend("");
    setSearch("");
    getTrends();
  };

  return (
    <>
      <Heading
        setTrend={setTrend}
        search={search}
        setSearch={setSearch}
        reset={onReset}
      />
      <Giphys trend={trend} />
    </>
  );
}
