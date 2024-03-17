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
      <div id="heading" className="header shadow-xl bg-pink-300">
        <div className="max-w-6xl  m-auto flex justify-between items-center">
        <div className="logo-container">
          <img
            className="Logo w-24"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul className="text-white flex m-6">
            <li className="px-4">
            <Link to='/' className=""> Online Status : {onlineStatus ? "🟢" : "🔴"}</Link>
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="#">Cart</Link>
            </li>
            <button className="log-btn" onClick={() =>{
                 btnNameReact === "LogIn" ? setBtnNameReact("LogOut") : setBtnNameReact("LogIn")
                 
            }}>{btnNameReact}</button>
          </ul>
        </div>
        </div>
      </div>
    );
  };
export default Header;