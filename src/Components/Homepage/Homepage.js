import Navbar from "../Navbar/Navbar";
import React from "react";
import "./Homepage.css"
function Homepage(props){
    return (
        <div>
            <h1>Shoes and stuff</h1>
            <Navbar cart={props.cart} cartCounter={props.cartCounter}/>
        </div>
    )
}
export default Homepage;