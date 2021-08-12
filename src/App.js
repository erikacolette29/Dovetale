import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "../src/componets/NavBar/NavBar";
import Trends from "../src/componets/Trending/Trend";
import Favorites from "../src/Favorites/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <main>
            <Trends />
          </main>
        )}
      />
      <Route
        exact
        path="/favorites"
        render={() => (
          <main>
            <Favorites />
          </main>
        )}
      />
    </>
  );
}

export default App;
