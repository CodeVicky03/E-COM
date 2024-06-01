import "./Productlist.css";
import React, { useState } from "react";
import furnitureProducts from "../component/Products/projects";
import { IoSearchOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";

const Productlist = () => {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState(furnitureProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  function handleFilter(li) {
    const searchTerm = li.trim().toLowerCase();
    const filteredProduct = furnitureProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filteredProduct);
  }

  function handleResetFilter() {
    setFilteredProducts(furnitureProducts);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredProduct = furnitureProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProduct);
    console.log("hello");
  };

  function handleClick(id) {
    localStorage.setItem("productClick", id);
    navigate("/product");
  }

  function handleCart(id) {
    const cartList = JSON.parse(localStorage.getItem("Cart")) || [];
    const Cart = [...cartList, id]
    localStorage.setItem("Cart", JSON.stringify(Cart))
  }

  function handleLike(id) {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id)
        ? prevLikedItems.filter((itemId) => itemId !== id)
        : [...prevLikedItems, id]
    );

    const currentFavorites = JSON.parse(localStorage.getItem("Favorites")) || [];
    const updatedFavorites = [...currentFavorites, id];
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <>
      <Navbar />
      <div className="list-products" id="list-products">
        <div className="filter">
          <ul>
            <button onClick={handleResetFilter}>All</button>
            <button onClick={() => handleFilter("Sofa")}>Sofa</button>
            <button onClick={() => handleFilter("Table")}>Table</button>
            <button onClick={() => handleFilter("Chair")}>Chair</button>
            <button onClick={() => handleFilter("Desk")}>Desk</button>
            <button onClick={() => handleFilter("Patio Set")}>Patio Set</button>
            <button onClick={() => handleFilter("Bed")}>Bed</button>
            <button onClick={() => handleFilter("Ottoman")}>Ottoman</button>
            <button onClick={() => handleFilter("Mirror")}>Mirror</button>
          </ul>
        </div>
        <div className="filtered-item">
          <div>
            <input
              type="text"
              placeholder="Search product"
              onChange={handleSearch}
            />
            <i>
              <IoSearchOutline />
            </i>
            <button>Search</button>
          </div>
          <div>
            {filteredProducts.map((Item) => (
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
                  <p className="views" onClick={() => handleCart(Item.id)}>
                    Add Cart
                  </p>
                </div>
                <i onClick={() => handleLike(Item.id)}>
                  {likedItems.includes(Item.id) ? (
                    <GoHeartFill
                      style={{ fontSize: "22px", color: "#FF0080" }}
                    />
                  ) : (
                    <IoHeartOutline
                      style={{ fontSize: "22px", color: "#FF0080" }}
                    />
                  )}
                </i>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productlist;
