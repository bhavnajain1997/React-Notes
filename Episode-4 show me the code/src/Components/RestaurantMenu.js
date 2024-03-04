import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utilis/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
      fetchMenu()
    },[])
    const {resId} = useParams();
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + 
        resId
        );

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };
    if(resInfo === null){
     return   <Shimmer/>
    }
        
    
    const { 
        name,
        cuisines, 
        costForTwoMessage 
    } =
    resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((itemName) => {
                        return (<li key = {itemName?.card?.info?.id}> {itemName?.card?.info?.name} - {"Rs."} {itemName?.card?.info?.price /100 || itemName?.card?.info?.defaultPrice/ 100}</li>)
                    })
                    }

                
            </ul>
        </div>
    )
}
export default RestaurantMenu;