import React, { useState, useEffect } from "react";
import "./Giphy.css";

const Giphys = ({ trend }) => {
  const [images, setImages] = useState([]);

  const handleSave = (e) => {
    const imagesArray = [...images];
    imagesArray.push(e.target.dataset.id);
    setImages([...imagesArray]);
    localStorage.setItem("favorites", JSON.stringify(imagesArray));
  };

  useEffect(() => {
    const imageArray = JSON.parse(localStorage.getItem("favorites")) || [];
    setImages([...imageArray]);
  }, []);

  return (
    <>
      {trend ? (
        <div className="container-gifs">
          {trend.map((t, idx) => {
            return (
              <img
                data-id={t.id}
                onClick={handleSave}
                className="gif "
                key={idx}
                src={t.images.fixed_height.url}
              />
            );
          })}
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default Giphys;
