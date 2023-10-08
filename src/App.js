import { Routes, Route } from "react-router-dom";
import MainNavigation from "./Routes/MainNavigation";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Auth from "./Routes/Auth";
import Checkout from "./Routes/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNavigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
