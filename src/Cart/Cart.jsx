import React, { useEffect, useMemo, useState } from "react";
import furnitureProducts from "../component/Products/projects";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    setCart(cart);
  }, []);

  const filteredWishlist = useMemo(() => {
    return furnitureProducts.filter((prv) => Cart.includes(prv.id));
  }, [Cart]);

  function handleClick(id) {
    localStorage.setItem("productClick", id);
    navigate("/product");
  }

  const handleRemoveCart = (id) => {
    const newCart = Cart.filter((item) => item !== id);
    setCart(newCart);
    localStorage.setItem("Cart", JSON.stringify(newCart));
  };

  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h1>Cart</h1>
        {filteredWishlist == "" ? (
          <div className="else">
            <p>Cart is Empty</p>
            <span onClick={() => navigate("/productlist")}>
              Go to Product List{" "}
              <MdOutlineKeyboardArrowRight
                style={{ fontSize: "20px", marginBottom: "-5px" }}
              />
            </span>
          </div>
        ) : (
          filteredWishlist.map((Item) => {
            return (
              <div key={Item.id} className="filter-product">
                <img
                  src={Item.image}
                  alt=""
                  onClick={() => handleClick(Item.id)}
                />
                <div className="price">
                  <p style={{ textDecoration: "underline" }}>{Item.title}</p>
                  <p>${Item.price}</p>
                </div>
                <div>
                  <p>
                    <span className="star">
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarHalfOutline />
                    </span>
                    {Item.review.rating}
                  </p>
                  <p
                    className="views"
                    onClick={() => handleRemoveCart(Item.id)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
