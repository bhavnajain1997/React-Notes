import useRestaurantMenu from "../utilis/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
        const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    if(resInfo === null){
     return   <Shimmer/>
    }
        
    
    const { 
        name,
        cuisines, 
        costForTwoMessage 
    } =
    resInfo?.cards[0]?.card?.card?.info;
    {
        const itemsList  = () => {

        }
    }
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((filterItem) => 
    filterItem?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )
   console.log(categories)
    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg pb-3">{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* Categories accordian */}
            {categories.map((category) => <RestaurantCategories data = {category?.card?.card}/>)}
            {/* <h2>Menu</h2> */}
            <ul>
                {/* {
                    itemCards?.map((itemName) => {
                        return (<li key = {itemName?.card?.info?.id}> {itemName?.card?.info?.name} - {"Rs."} {itemName?.card?.info?.price /100 || itemName?.card?.info?.defaultPrice/ 100}</li>)
                    })
                    } */}

                
            </ul>
        </div>
    )
}
export default RestaurantMenu;