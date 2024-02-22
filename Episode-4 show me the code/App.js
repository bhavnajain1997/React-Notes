import React from "react"
import ReactDOM from "react-dom"

const Header = () => {
    return (
        <div id="heading" className="header">
            <div className="logo-container">
                <img className="Logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
            <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
            </ul>
             </div>
        </div>
        
    )
}
const RestaurantCard = (props) => {
    const {resName,cuisine} = props;
    return(
        <div className="restro-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
} 
const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="restaurant-container">
             <RestaurantCard resName = "La Pino Pizza" cuisine = "Pizza, Fast Food" />
             <RestaurantCard resName = "Dominos" cuisine = "Pizza, Fast Food"/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
        <Header />
        <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)