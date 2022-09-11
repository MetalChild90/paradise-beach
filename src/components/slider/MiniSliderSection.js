import Slider from "./Slider";

function MiniSliderSection({ images, apartment }) {
  return (
    <div
      className="miniSliderSection"
      style={{ flexDirection: apartment.reverse ? "row-reverse" : "row" }}
    >
      <Slider bigSlider={false} dataImages={images} />
      <div className="infoBox">
        <h3>{apartment.name}</h3>
        <p>{apartment.description}</p>
        <ul>
          {apartment.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniSliderSection;
