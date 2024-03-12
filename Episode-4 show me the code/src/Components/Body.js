
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utilis/useOnlineStatus';
const Body = () => {
    const [listOfRestaurant , setListOfRestaurant] = useState([]);
    const [filterListRestaurant, setFilterListRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("")
    
    useEffect(() => {
      //  console.log("useEffect Called")
       fetchData()
    }, [])
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json();
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilterListRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
    return (
    <h1>Looks like you're offline !! Please check your internet connection.</h1>
    )

    

      return   (
      <div className="body-container">
        <div className="filter">
          
            <button className="filter-btn" onClick={() => {
              console.log("click")
              let filterRestaurant = listOfRestaurant.filter((restro) => {
                // return restro.info.avgRating < 4.5
                console.log(restro)
              })
              setListOfRestaurant(filterRestaurant)
            }}>Top Rated Restaurants</button>
          
          <div className="search">
            <input className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="search-btn" onClick={() => {
              const filterListRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilterListRestaurant(filterListRestaurant)
            }}>Search</button>
          </div>
          </div>
          
          
        <div className="restaurant-container">
        {
        filterListRestaurant.map((restaurant) => {
          
         return (
         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard key = {restaurant.info.id} resData = {restaurant}/></Link>
         )
        
})
                }
  
        </div>
      </div>
    );
        }

export default Body;