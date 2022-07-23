import React from "react";

function Socials() {
  return (
    <section className="Socials">
      <div className="group">
        <ul className="social-links">
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="group">
        <ul className="action-buttons">
          <li className="action-item">
            <a href="">Download a brochure</a>
          </li>
          <li className="action-item">
            <a href="">Plan your stay</a>
          </li>
          <li className="action-item">
            <a href="">
              Subscribe <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Socials;
