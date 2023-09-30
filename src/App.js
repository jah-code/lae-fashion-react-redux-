import { Routes, Route } from "react-router-dom";
import MainNavigation from "./Routes/MainNavigation";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Auth from "./Routes/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNavigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" eleme nt={<Shop />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
