import { useEffect } from "react";
import { CategoriesContext } from "../Contexts/CategoriesContext";
import "../assets/styles/Shop/Shop.scss";
import CategoryPreview from "../Components/DirectoryItem/DirectoryPreview";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../store/Category/CategoryAction";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
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
