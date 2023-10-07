import { useContext } from "react";
import "../../assets/styles/Shop/ProductCard.scss";
import Button from "../Common/Button";
import { CartContext } from "../../Contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
