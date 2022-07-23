import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="arrow prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="arrow next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;
