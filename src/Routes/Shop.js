import { useEffect } from "react";
import "../assets/styles/Shop/Shop.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCategories } from "../store/Category/CategoryAction";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
