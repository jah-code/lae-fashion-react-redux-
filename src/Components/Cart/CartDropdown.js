import { useNavigate } from "react-router-dom";
import "../../assets/styles/Cart/Cart.scss";
import Button from "../Common/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/Cart/CartSelector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span>No added items</span>
        )}
      </div>
      <Button
        onClick={() => navigate("/checkout")}
        style={{ fontSize: "13px" }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
