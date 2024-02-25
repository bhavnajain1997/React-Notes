import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn")
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
            <button className="log-btn" onClick={() =>{
                 btnNameReact === "LogIn" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn")
                 
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
export default Header;