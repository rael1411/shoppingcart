import React from "react";
import {NavLink} from 'react-router-dom'
import "./style.css";
function Navbar(props){
    return(
        <ul className="navbar">
            <li><NavLink exact activeClassName="active" to="/">Homepage</NavLink></li>
            <li><NavLink activeClassName="active" to="/shop">Shop</NavLink></li>
            <li><NavLink activeClassName="active" to="/cart" style={{float: "right"}}>Cart</NavLink></li>
        </ul>
    )
}

export default Navbar;