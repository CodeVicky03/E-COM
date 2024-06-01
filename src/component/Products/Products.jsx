import React from "react";
import "./Products.css";
import furnitureProducts from "./projects";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Products() {

  const navigate = useNavigate()

  return (
    <div className="products">
      <h1>Products</h1>
      <p>
        "A great product isn't just a commodity; it's an experience that solves
        a <span style={{ color: "#ff3c01" }}>problem</span>,
        <span style={{ color: "#ff3c01" }}>enhances lives</span>,
        <span style={{ color: "#ff3c01" }}>sparks joy</span>."
      </p>
      <div className="product-list">
        {furnitureProducts.length > 0 &&
          furnitureProducts.slice(0, 8).map((list) => (
            <div key={list.id} className="product" onClick={()=> navigate("/productlist")}>
              <img src={list.image} alt={list.name} />
              <p>{list.title}</p>
              <span>
                <FaDollarSign style={{ fontSize: "20px" }} />
                {list.price}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
