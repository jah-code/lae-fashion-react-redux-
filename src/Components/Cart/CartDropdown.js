import { useContext } from "react";
import "../../assets/styles/Cart/Cart.scss";
import Button from "../Common/Button";
import CartItem from "./CartItem";
import { CartContext } from "../../Contexts/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.length &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
