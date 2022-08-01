import { useAuth } from "../../../Context/AuthContext";

const Basket = () => {

    const { cartItems } = useAuth()
    return ( 
        <div>
            <p>This is Cart</p>
            { cartItems.length === 0 && <p>Cart is Empty, shop some cake!</p> }
        </div>
     );
}
 
export default Basket;