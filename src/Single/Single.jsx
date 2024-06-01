import React, { useEffect, useState } from "react";
import "./Single.css";
import furnitureProducts from "../component/Products/projects";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";

const Single = () => {
  const [ItemId, setItemId] = useState("");
  const [Username, setUsername] = useState();
  const [UserEmail, setUseremail] = useState();
  const [Usernumber, setUsernumber] = useState();
  const [Useraddress, setUseraddress] = useState();

  useEffect(() => {
    const itemId = localStorage.getItem("productClick");
    if (itemId) {
      setItemId(itemId);
    }
  }, []);

  const handleOrder = (id) => {
    const user = {
      id : id,
      username: Username,
      email: UserEmail,
      number: Usernumber,
      address: Useraddress,
    };
    localStorage.setItem("Orders", JSON.stringify(user));

    const orderID = JSON.parse(localStorage.getItem("ListOrder") || "[]");
    const updatedOrderID = [...orderID, id];
    localStorage.setItem("ListOrder", JSON.stringify(updatedOrderID));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        {furnitureProducts.map((item) => {
          if (item.id == ItemId) {
            return (
              <div key={item.id} className="single-product">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.productName}</h4>
                  <p className="re-view">
                    <span>
                      <TiStarFullOutline
                        style={{ fontSize: "22px", color: "#FF9A00" }}
                      />
                      <TiStarFullOutline
                        style={{ fontSize: "22px", color: "#FF9A00" }}
                      />
                      <TiStarFullOutline
                        style={{ fontSize: "22px", color: "#FF9A00" }}
                      />
                      <TiStarFullOutline
                        style={{ fontSize: "22px", color: "#FF9A00" }}
                      />
                      <TiStarHalfOutline
                        style={{
                          fontSize: "22px",
                          color: "#FF9A00",
                          marginRight: "6px",
                        }}
                      />
                      {item.review.rating}
                    </span>
                    <span>{item.review.numberOfReviews} Reviews</span>
                  </p>
                  <p className="avalable">{item.availability}</p>
                  <p className="dis-pric">
                    <span>${item.price}</span>
                    <span>-{item.discount}% Discount</span>
                  </p>
                  <p className="off">
                    <i>
                      <IoCheckbox />
                    </i>
                    {item.offers[0]}
                  </p>
                  <h5>{item.description}</h5>
                  <div className="address-input">
                    <div>
                      <input
                        type="text"
                        placeholder="Usename"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <textarea
                        rows={4}
                        placeholder="Address"
                        onChange={(e) => setUseraddress(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Mobile number"
                        onChange={(e) => setUsernumber(e.target.value)}
                      />
                      <input
                        type="Email"
                        placeholder="Email"
                        onChange={(e) => setUseremail(e.target.value)}
                      />
                      <button onClick={() => handleOrder(item.id)}>
                        Order Now
                      </button>
                    </div>
                  </div>
                  <span className="pay-method">
                    Select Payment Method{" "}
                    <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
};

export default Single;
