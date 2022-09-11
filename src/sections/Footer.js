import logo from "../assets/cloud9.png";

const menuList1 = [
  "Welcome",
  "Reservations",
  "Accommodation",
  "Things To Do",
  "Location",
  "Rates",
  "Contact Us",
  "Galler",
  "Feedback",
];

const menuList2 = [
  "Offers",
  "Gallery",
  "About Us",
  "Careers",
  "Contact Us",
  "Cookie Policy",
  "Privacy Policy",
];

function Footer() {
  return (
    <div className="Footer">
      <div className="links">
        <div className="column">
          <img className="logo-footer" src={logo} alt="hotels logo" />
          <span>enquiries@cloud9holidays.com</span>
          <ul className="list">
            <li>
              <a href="!#">
                Contact us<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                Make a reservation<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h2>paradise beach</h2>
          <ul className="list">
            {menuList1.map((item, i) => (
              <li key={i}>
                <a href="!#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Cloud 9 Holidays</h2>
          <ul className="list">
            {menuList2.map((item, i) => (
              <li key={i}>
                <a href="!#">{item}</a>
              </li>
            ))}
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
