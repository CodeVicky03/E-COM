import React, { useEffect, useMemo, useState } from "react";
import "./Order.css";
import furnitureProducts from "../component/Products/projects";
import Navbar from "../component/Navbar";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Order = () => {

  const navigate = useNavigate();
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    const orderlist = JSON.parse(localStorage.getItem("ListOrder"));
    if (orderlist) {
      setOrders(orderlist);
    }
  }, []);

  const filteredOrders = useMemo(() => {
    return furnitureProducts.filter((prv) => Orders.includes(prv.id));
  }, [Orders]);

  function handleRemoveOrder(id) {
    const newOrder = Orders.filter((prv) => prv !== id);
    setOrders(newOrder);
    localStorage.setItem("ListOrder", JSON.stringify(newOrder));
  }

  const address = useMemo(() => {
    const add = JSON.parse(localStorage.getItem("Orders"));
    if (add) {
      return [add.address, add.number];
    } else {
      return [null, null];
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="order">
        {filteredOrders == "" ? (
          <div className="else">
            <p>No Orders</p>
            <span onClick={() => navigate("/productlist")}>
              Go to Product List
              <MdOutlineKeyboardArrowRight
                style={{ fontSize: "20px", marginBottom: "-5px" }}
              />
            </span>
          </div>
        ) : (
          filteredOrders.map((value) => {
            return (
              <div key={value.id}>
                <img src={value.image} alt="" />
                <h1>{value.productName}</h1>
                <p>{value.description}</p>
                <span>
                  ${value.price}
                  <button onClick={() => handleRemoveOrder(value.id)}>
                    Cancle
                  </button>
                </span>
                <p style={{ fontSize: "14px" }}>Quantity : 1</p>
                <hr></hr>
                <div className="orderDetails">
                  <p>{address[0]}.</p>
                  <p>{address[1]}</p>
                </div>
                <div className="loader">
                  <p></p>
                  <span>Delivering...</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Order;
