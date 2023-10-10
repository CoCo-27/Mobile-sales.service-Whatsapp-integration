import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-svgrepo-com.svg";
import rightArrow from "./icons/right-svgrepo-com.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        className="btn-slide-img"
        src={direction === "next" ? rightArrow : leftArrow}
      />
    </button>
  );
}
