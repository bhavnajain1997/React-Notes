import ItemList from "./ItemList"
const RestaurantCategories = (data) => {
    console.log(data)
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 m-auto my-2 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between  items-center border-b-2 border-solid border-gray pb-3">
                <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                <span>⬇️</span>

                
            </div>
            
            {/* Accordian Body */}
            <ItemList items = {data.data.itemCards}/>
            </div>
        </div>
    )
}
export default RestaurantCategories