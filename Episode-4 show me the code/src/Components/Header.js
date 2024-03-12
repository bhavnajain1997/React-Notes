import { useState , useEffect} from "react";
import { LOGO_URL } from "../utilis/constants";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
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
            <Link > Online Status : {onlineStatus ? "🟢" : "🔴"}</Link>
            </li>
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
              <Link to="/grocery">Grocery</Link>
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