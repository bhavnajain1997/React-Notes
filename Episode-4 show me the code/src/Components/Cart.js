import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClearButton = () => {
    dispatch(clearCart())
  }
    return (
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-6/12 m-auto my-6 bg-gray-50 shadow-lg p-4">
            <button className="p-2 m-2 bg-black text-white" onClick={handleClearButton}>Clear Cart</button>
            {cartItems.length === 0 && (
              <h1>Cart is empty.Add Items to the cart.</h1>
            )}
            <ItemList items = {cartItems}/>
          </div>
        </div>
    )
}

export default Cart;