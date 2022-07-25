import React, { useState, useEffect } from "react";
import BgVideo from "../components/header/BgVideo";
import TopNav from "../components/header/TopNav";
import $ from "jquery";

function Header({ fsOffset, isScrolled, hideLoader }) {
  function transition() {
    $("html, body").animate(
      {
        scrollTop: fsOffset,
      },
      1000
    );
  }

  return (
    <div className="Header">
      <TopNav isScrolled={isScrolled} />
      <BgVideo hideLoader={hideLoader} />
      <span className="go-down" onClick={transition}>
        <i className="fa-solid fa-chevron-down"></i>
      </span>
    </div>
  );
}

export default Header;
