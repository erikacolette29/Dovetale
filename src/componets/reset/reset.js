import React from "react";
import "./reset.css";
const Reset = ({ reset }) => {
  return (
    <>
      <div className="button-box">
        <button className="reset" onClick={reset}>
          Clear
        </button>
      </div>
    </>
  );
};

export default Reset;
