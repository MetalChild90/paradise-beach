import React from "react";
import logo from "../assets/cloud9.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="links">
        <div className="column">
          <img className="logo-footer" src={logo} alt="hotels logo" />
          <span>enquiries@cloud9holidays.com</span>
          <ul className="list">
            <li>
              <a href="">
                Contact us<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="">
                Make a reservation<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2>paradise beach</h2>
          <ul className="list">
            <li>
              <a href="">Welcome</a>
            </li>
            <li>
              <a href="">Reservations</a>
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
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2>Cloud 9 Holidays</h2>
          <ul className="list">
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>{new Date().getFullYear()} &copy; Cloud 9 Holidays</p>
      </div>
    </div>
  );
}

export default Footer;
