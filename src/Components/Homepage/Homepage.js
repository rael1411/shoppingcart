import Navbar from "../Navbar/Navbar";
import React from "react";
import "./Homepage.css"
function Homepage(props){
    return (
        <div>
            <h1>Homepage</h1>
            <Navbar cart={props.cart}/>
        </div>
    )
}
export default Homepage;