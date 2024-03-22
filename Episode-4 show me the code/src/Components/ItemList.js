import { useDispatch } from "react-redux"
import { CDN_URL } from "../utilis/constants"
import { addItem } from "../utilis/cartSlice";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItems = (item) => {
       // dispatch the item
       dispatch(addItem(item))
    }
     console.log(items)
     return(
        <div>
            {items.map(item => <li className="list-none flex justify-between items-center py-2 " key = {item.card.info.id}>
                <div className="flex-col items-start text-left  w-9/12">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="text-red-400 font-bold">{"₹"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                <p className="text-red-900 text-xs font-bold text-left">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 relative text-center ">
                <div className="absolute bottom-1 text-center">
                    <button className="bg-black text-white py-2 px-10 " onClick={() => handleAddItems(item)}>Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId}/>
                    
                </div>
            </li>)}
        </div>
     )
 
}
export default ItemList