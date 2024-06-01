import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import {useNavigate} from "react-router-dom"

function Navbar() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <h1>E-com</h1>
        <div className="search-div">
          <input type="text" placeholder="Search product" /> |
          <span>
            Category <RiArrowDownSLine />
          </span>
          <p>
            <IoSearchOutline />
          </p>
        </div>
        <div className="section">
          <p onClick={()=> navigate("/wishlist")}>
            <GoHeart className="icons" />
            <span>Wish List</span>
          </p>
          <p onClick={()=> navigate("/Cart")}>
            <RiShoppingCart2Line className="icons" />
           <span>Cart</span>
          </p>
          <p>
            <MdPersonOutline className="icons" />
           <span>Account</span>
          </p>
        </div>
      </div>
      <div className="sec-nav">
        <ul>
          <li onClick={()=> navigate("/home")}>Home</li>
          <li onClick={()=> navigate("/productlist")}>Shop</li>
          <li onClick={()=> navigate("/Order")}>Orders</li>
          <li onClick={()=> navigate("/About")}>About</li>
        </ul>
        <ul className="loc-ca">
          <li>Location <RiArrowDownSLine /></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
