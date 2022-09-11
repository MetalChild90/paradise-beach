function Dots({ activeIndex, onclick, dataImages }) {
  return (
    <div className="all-dots">
      {dataImages.map((slide, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index && "active"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
