import React, { useEffect } from "react";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Work from "./component/Work/Work";
import Products from "./component/Products/Products";
import Offer from "./component/Offer/Offer";
import Connect from "./component/Connecct/Connect";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Mainapp() {

  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    if (isLogin === "false") {
      navigate("/");
    }
  }, []);

  return (
    <div className="furniture">
      <Navbar />
      <Home />
      <About />
      <Header />
      <Work />
      <Products />
      <Offer />
      <Connect />
      <Footer />
    </div>
  );
}

export default Mainapp;
