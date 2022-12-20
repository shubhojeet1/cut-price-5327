import { Route, Routes } from "react-router-dom";
import Women from "../component/WomensPage/Women";
import MenPage from "../pages/MenPage";
import DesignArt from "../component/DesignArt";
import Kids from "../component/Kids";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Viewall from "../component/Menpage/Viewall";
import { Cart } from "../component/Menpage/cart";
import Bill from "../component/Menpage/Bill";
import { Checkout } from "../component/Menpage/Checkout";
import Success from "../component/Menpage/Success";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Women />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/men" element={<MenPage />}></Route>
      <Route path="/art" element={<DesignArt />}></Route>
      <Route path="/kids" element={<Kids />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/viewall" element={<Viewall />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/bill" element={<Bill />}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
  );
};

export default Allroutes;
