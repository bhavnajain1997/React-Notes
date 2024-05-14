import useRestaurantMenu from "../utilis/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState()
    const {resId} = useParams();    
    const resInfo = useRestaurantMenu(resId)
    const name = resInfo?.cards[2]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    
    
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((filterItem) => 
    filterItem?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )

    console.log(itemCards)
    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg pb-3">{cuisines} - {costForTwoMessage}</p>
            {/* Categories accordian */}
            {categories?.map((category, index) =>
            // Controlled Component
             <RestaurantCategories 
              key ={category?.card?.card?.title} 
              data = {category?.card?.card} 
              showItems={index === showIndex ? true : false}
              setShowIndex = {() => setShowIndex(index)}
              />)}
            {/* <h2>Menu</h2> */}   
            <ul>
                
                {/* {itemCards  && itemCards?.map((itemName) => {
                        return (
                        <li key = {itemName?.card?.info?.id}> {itemName?.card?.info?.name} - {"Rs."} {itemName?.card?.info?.price /100 || itemName?.card?.info?.defaultPrice/ 100}</li>
                        )
                    })} */}

                
            </ul>
        </div>
    )
}
export default RestaurantMenu;