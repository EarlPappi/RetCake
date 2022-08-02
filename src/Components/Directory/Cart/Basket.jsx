import { useAuth } from "../../../Context/AuthContext";
import Wrapper from "../../TinyComp/Wrapper";

const Basket = () => {

    const { cartItems } = useAuth()
    return (
        <div>
            <Wrapper>
                <p>This is Cart</p>
                {cartItems.length === 0 && <p>Cart is Empty, shop some cake!</p>}
            </Wrapper>
        </div>
    );
}

export default Basket;