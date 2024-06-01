import React, { useEffect, useMemo, useState } from "react";
import furnitureProducts from "../component/Products/projects";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoHeartFill } from "react-icons/go";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Wishlist = () => {
  const navigate = useNavigate();
  const [Fav, setFav] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("Favorites"));
    setFav(storedFavorites);
  }, []);

  const filteredWishlist = useMemo(() => {
    return furnitureProducts.filter((prv) => Fav.includes(prv.id));
  }, [Fav]);

  function handleClick(id) {
    localStorage.setItem("productClick", id);
    navigate("/product");
  }

  const handleRemoveFav = (id) => {
    const newFav = Fav.filter((item) => item !== id);
    setFav(newFav);
    localStorage.setItem("Favorites", JSON.stringify(newFav));
  };

  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h1>Favourite List</h1>
        {filteredWishlist == "" ? (
          <div className="else">
            <p>Wish list is Empty</p>
            <span onClick={() => navigate("/productlist")}>
              Go to Product List
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
                  <p className="views">Add Cart</p>
                </div>
                <i onClick={() => handleRemoveFav(Item.id)}>
                  <GoHeartFill style={{ fontSize: "22px", color: "#FF0080" }} />
                </i>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
