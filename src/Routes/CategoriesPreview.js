import { Fragment } from "react";
import CategoryPreview from "../Components/DirectoryItem/DirectoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/Category/CategorySelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
