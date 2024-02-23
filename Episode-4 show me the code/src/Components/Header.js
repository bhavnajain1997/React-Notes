import { LOGO_URL } from "../utilis/constants";
const Header = () => {
    return (
      <div id="heading" className="header">
        <div className="logo-container">
          <img
            className="Logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;