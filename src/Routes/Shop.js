import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import ProductCard from "../Components/Shop/ProductCard";
import "../assets/styles/Shop/Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products &&
        products.length &&
        products.map((product) => {
          return <ProductCard product={product} />;
        })}
    </div>
  );
};

export default Shop;
