import React from "react";
import "./Work.css";
import { LuTruck } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import wave from "../../assets/wave.svg"

function Work() {
  return (
    <div className="work">
      <div>
        <p><LuTruck style={{fontSize:"40px"}}/> Free Worldwide Shipping</p>
        <p>
          "Explore our vast selection of furniture and enjoy the convenience of
          free worldwide shipping on all orders. Elevate your space with ease,
          no matter where you are."
        </p>
      </div>
      <div>
        <p><RiSofaLine style={{fontSize:"40px"}}/> Best Quality Product</p>
        <p>
          "Experience unparalleled quality with our meticulously crafted
          furniture. Each piece is expertly designed to exceed
          your expectations. Elevate your space with the assurance of the best
          in class."
        </p>
      </div>
      <div>
        <p><RiMoneyPoundCircleLine style={{fontSize:"40px"}}/> Super Affodrable Price</p>
        <p>
          "Discover unbeatable value with our super affordable prices on
          top-quality furniture. Upgrade your home without breaking the bank.
          Shop now and save big on stylish pieces for every room."
        </p>
      </div>
        <img src={wave} alt=""/>    
    </div>
  );
}

export default Work;
