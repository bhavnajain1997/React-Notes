import RestaurantCard from "./RestaurantCard";
import resList from "../utilis/mockdata";
const Body = () => {
    return (
      <div className="body-container">
        {/* <div className="search">Search</div> */}
        <div className="filter">
            <button className="filter-btn" onClick={() => {
               
            }}>
                Top Rated Restaurants
                </button>
        </div>
        <div className="restaurant-container">
          {
  
           resList.map(restaurant => {
            return <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
           })
          }
  
        </div>
      </div>
    );
  };
export default Body;