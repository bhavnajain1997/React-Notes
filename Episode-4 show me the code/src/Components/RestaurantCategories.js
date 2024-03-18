import ItemList from "./ItemList";
import { useState } from 'react'
const RestaurantCategories = ({data , showItems, setShowIndex}) => {
    // Uncontrolled component
    // const [showItems, setShowItems] = useState();

    const handleClick = (e) => {
        // console.log("Clicked")
        // setShowItems(!showItems)
        setShowIndex(e.target.value)
    }
   // console.log(data)
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 m-auto my-6 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between  items-center pb-3 cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span>⬇️</span>

                
            </div>
            
            {/* Accordian Body */}
            {/* If my showitem is true then show Itemlist */}
           {showItems && <ItemList items = {data?.itemCards}/> } 
            </div>
        </div>
    )
}
export default RestaurantCategories