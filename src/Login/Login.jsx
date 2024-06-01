import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import space from "../assets/space.mp4";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[log, setLog] = useState("")

  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      localStorage.setItem("login", "false");
    }
  }, []);

  useEffect(() => {
    const isLogin = localStorage.getItem("login");
    if (isLogin === "true") {
        navigate("/home");
    }
  }, [log]);

  const handleSumbmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("login", "true");
      setLog("Success")
    }
  };

  return (
    <div className="login">
      <video src={space} muted autoPlay loop></video>
      <form onSubmit={handleSumbmit}>
        <p>LOGIN</p>
        <input
          type="Email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span>Forgot Password?</span>
        <div>
          <i style={{ backgroundColor: "red" }}>
            <FaGoogle />
          </i>
          <i style={{ backgroundColor: "blue" }}>
            <FaFacebookF />
          </i>
        </div>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Login;
