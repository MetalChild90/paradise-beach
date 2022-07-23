import React, { useState, useEffect } from "react";
import "./scss/main.scss";
import Header from "./sections/Header";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Socials from "./sections/Socials";
import Footer from "./sections/Footer";

function App() {
  const [firstSectionOffset, setFirstSectionOffset] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleOffset(offset) {
    setFirstSectionOffset(offset);
  }

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= firstSectionOffset / 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(isScrolled);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="App">
      <Header fsOffset={firstSectionOffset} isScrolled={isScrolled} />
      <FirstSection handleOffset={handleOffset} isScrolled={isScrolled} />
      <SecondSection />
      <ThirdSection />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
