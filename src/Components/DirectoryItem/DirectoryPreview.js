import { Link } from "react-router-dom";
import "../../assets/styles/Categories/CategoryPreview.scss";
import ProductCard from "../Shop/ProductCard";

const DirectoryPreview = (props) => {
  const { title, products } = props;

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
        {/* <span className="title">{title.toUpperCase()}</span> */}
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default DirectoryPreview;
