import React, { useState } from "react";
import "./Nav.css";
import { useAuthContext } from "../Context/AuthProvider";

const Navbar = (props) => {
    const { user, setLoginTrue } = useAuthContext();

  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">Support</a>
        <a >{user}</a>
        <button onClick={(e) => setLoginTrue(false) || props.set(false) }>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;