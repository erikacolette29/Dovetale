import React, { useEffect, useState } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageArray = JSON.parse(localStorage.getItem("favorites")) || [];
    setImages([...imageArray]);
  }, []);

  return (
    <div className="collection-container">
      <h1 className="favorites-title">Favorites Collection</h1>
      {images.map((I) => {
        let imgUrl = `https://media1.giphy.com/media/${I}/200.gif`;
        return <img alt="imgUrl" src={imgUrl} />;
      })}
    </div>
  );
};

export default Favorites;
