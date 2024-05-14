
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utilis/useOnlineStatus';
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utilis/UserContext";
import User from "./User";

const Body = () => {
    const [listOfRestaurant , setListOfRestaurant] = useState([]);
    const [filterListRestaurant, setFilterListRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    const {loggedInUser , setUserName} = useContext(UserContext)
    //console.log(listOfRestaurant)
    useEffect(() => {
      //  console.log("useEffect Called")
       fetchData()
    }, [])
    
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json();
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilterListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
      return (
        <h1>Looks like you're offline !! Please check your internet connection.</h1>
        )
    }
    console.log(listOfRestaurant)
      return (listOfRestaurant.length === 0) ? (<Shimmer/>) :  (
      <div className="body-container max-w-6xl mx-auto">
        <div className="filter flex items-center gap-x-5 py-10">
        <div className="search p-2 flex gap-4">
            <input className="search-box p-2 border-2 border-solid border-black" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="search-btn p-2 bg-green-300 border-2 border-solid border-black" onClick={() => {
              const filterListRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilterListRestaurant(filterListRestaurant)
            }}>Search</button>
          </div>
            <button className="filter-btn bg-green-300 p-2 border-2 border-solid border-black" onClick={() => {
              console.log("click")
              let filterRestaurant = filterListRestaurant.filter((restro) => {
                 return restro.info.avgRating > 4.5
                //console.log(restro)
              })
              setFilterListRestaurant(filterRestaurant)
            }}>Top Rated Restaurants</button>
          
          <div>
            <label>UserName : </label>
            <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
          </div>
        </div>
          
          
        <div className="restaurant-container flex flex-wrap mx-4 ">
        {
        filterListRestaurant.map((restaurant) => {
          
         return(
         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
          {
            restaurant.info.areaName === 'Indiranagar' ? (
            <RestaurantCardPromoted resData = {restaurant}/> 
            ) : (
              <RestaurantCard resData = {restaurant}/>
            )
          }
          
          </Link>
         )
        
})
                }
  
        </div>
      </div>
    );
        }
  

export default Body;