import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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
console.log(json)
    }
    // Normal JS Variable
    // if(listOfRestaurant.length === 0){
    //   return(
    //     <Shimmer/>
    //   )
      
    // }
    // else
      return (listOfRestaurant === 0) ? <Shimmer/> : (
      <div className="body-container">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="search-btn" onClick={()=>{
              const filterListRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilterListRestaurant(filterListRestaurant)
            }}>Search</button>
          </div>
          <div className="filter">
          
            <button className="filter-btn" onClick={() => {
              let filterRestaurant = listOfRestaurant.filter((res) => {
               return res.info.avgRating > 4.5;
              })
              setListOfRestaurant(filterRestaurant);
            }}>
                Top Rated Restaurants
                </button>
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