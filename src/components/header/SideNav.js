import React from "react";
import logo from "../../assets/cloud9.png";

function SideNav({ showSideNav, closeSidenav }) {
  return (
    <div className={`SideNav ${showSideNav && "active"}`}>
      <div className="logo-container">
        <img className="logo" src={logo} alt="island logo" />
      </div>
      <div className="reservation-input">
        <p>Make a Reservation</p>
        <i className="fa-solid fa-calendar-days"></i>
      </div>
      <div className="links">
        <p>
          <strong className="news">Latest News</strong>
        </p>
        <p>
          <strong className="gallery">Gallery</strong>
        </p>
        <div className="list-container">
          <ul className="list">
            <li>
              <a href="">The Island</a>
            </li>
            <li>
              <a href="">Accommodation</a>
            </li>
            <li>
              <a href="">Things To Do</a>
            </li>
            <li>
              <a href="">Location</a>
            </li>
            <li>
              <a href="">Rates</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      {showSideNav && (
        <span onClick={closeSidenav} className="close-side-menu">
          &times;
        </span>
      )}
    </div>
  );
}
export default SideNav;
