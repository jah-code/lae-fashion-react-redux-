import "../../assets/styles/Shop/ProductCard.scss";
import Button from "../Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/Cart/CartAction";
import { selectCartItems } from "../../store/Cart/CartSelector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
