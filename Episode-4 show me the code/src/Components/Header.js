import { useState , useEffect} from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  useEffect(() => {
   //console.log("useEffect called");
  }, []);
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Cart</Link>
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