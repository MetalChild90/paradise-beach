import React from "react";
import images from "../assets/smallSliderImages/dataImages";
import Slider from "../components/slider/Slider";

function SecondSection() {
  const data1 = images.slice(0, 3);
  const data2 = images.slice(3);

  return (
    <div className="SecondSection">
      <div className="innerWraper">
        <h2>accomodation</h2>
        <div className="miniSliderSection">
          <Slider bigSlider={false} dataImages={data1} />
          <div className="infoBox">
            <h3>Apartament 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              pariatur voluptate amet dolorem culpa vitae voluptas dicta.
            </p>
            <ul>
              <li>Feature one</li>
              <li>Very very very long feature number two</li>
              <li>Feature three</li>
            </ul>
          </div>
        </div>
        <div className="miniSliderSection">
          <div className="infoBox">
            <h3>Apartament 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              molestias voluptate quam repellendus quae animi, deserunt sit rem
              dicta ad, architecto commodi.
            </p>
            <ul>
              <li>Awsome pool</li>
              <li>Fifty terraces</li>
              <li>360 degree view</li>
            </ul>
          </div>
          <Slider bigSlider={false} dataImages={data2} />
        </div>
        <p className="cta-btn-wrapper">
          <button className="cta-btn">enquire now</button>
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
