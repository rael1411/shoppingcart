import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function Navbar(props) {
    let cartSize = props.cartCounter()
  return (
    <ul className="navbar">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/cart" style={{ float: "right" }}>
          Cart <span className="navbar-cart-size">{cartSize > 0  ? (cartSize < 10 ? cartSize : "9+") : ""}</span>
        </NavLink>{" "}
      </li>
    </ul>
  );
}

export default Navbar;
