import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    let [listOfRestaurant , setListOfRestaurant] = useState([]);
    useEffect(() => {
      //  console.log("useEffect Called")
       fetchData()
    }, [])

    const fetchData = async () => {
      const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.587555277051887&lng=77.33176790177822&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)

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
        {/* <div className="search">Search</div> */}
          <div className="filter">
            <button className="filter-btn" onClick={() => {
              let filterRestaurant = listOfRestaurant.filter((res) => {
               return res.info.avgRating > 4;
              })
              setListOfRestaurant(filterRestaurant);
            }}>
                Top Rated Restaurants
                </button>
          </div>
        <div className="restaurant-container">
          {
           listOfRestaurant.map((restaurant) => {
            return <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
           }
           ) 
          }
  
        </div>
      </div>
    );
        }

export default Body;