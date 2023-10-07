import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import "../../assets/styles/Cart/Cart.scss";
import { CartContext } from "../../Contexts/CartContext";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingIcon />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
