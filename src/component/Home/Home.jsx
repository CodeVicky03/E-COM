import React, { useState } from "react";
import "./Home.css";
import one from "../../assets/image-one.jpg";
import two from "../../assets/image-two.jpg";
import three from "../../assets/image-three.jpg";
import four from "../../assets/image-four.jpg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-main">
      <div className="home">
        <h1>
          Furniture for<br></br> Your Dream<br></br> Home.
        </h1>
        <p>Design your sanctuary with our designer furniture collection. Elevate your living experience today.</p>
        <button onClick={()=> navigate("/productlist")}>Go Shopping</button>
      </div>
        <p className="new">---- New Furniture</p>
      <div className="slider">
        <div id="image-one">
          <img src={one} alt="" />
        </div>
        <div id="image-two">
          <img src={two} alt="" />
        </div>
        <div id="image-three">
          <img src={three} alt="" />
        </div>
        <div id="image-four">
          <img src={four} alt="" />
        </div>
      </div>
      <div className="navigation-slide">
        <a href="#image-one">
          <MdOutlineKeyboardArrowLeft/>
        </a>
        <a href="#image-four">
          <MdKeyboardArrowRight/>
        </a>
      </div>
    </div>
  );
}

export default Home;
