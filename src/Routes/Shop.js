import { useContext } from "react";
import { CategoriesContext } from "../Contexts/CategoriesContext";
import "../assets/styles/Shop/Shop.scss";
import CategoryPreview from "../Components/DirectoryItem/DirectoryPreview";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
