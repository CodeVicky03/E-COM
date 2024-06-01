import Mainapp from "./Mainapp";
import Productlist from "./productList/Productlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./Single/Single";
import Wishlist from "./Wishlist/Wishlist";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import Projectabout from "./Projabout/Projectabout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Mainapp />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/product" element={<Single />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/About" element={<Projectabout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
