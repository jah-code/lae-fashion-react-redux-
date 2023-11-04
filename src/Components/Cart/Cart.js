import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import "../../assets/styles/Cart/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/Cart/CartSelector";
import { setIsCartOpen } from "../../store/Cart/CartAction";

const Cart = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCartHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingIcon />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
