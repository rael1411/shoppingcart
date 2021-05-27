import React from "react";
import Navbar from "../../Navbar/Navbar";
import CartItem from "./CartItem/CartItem";
import "./CartPage.css"
function CartPage(props) {
  const cartItems = props.cart.map((item) => (
    <li key={item.id}>
      <CartItem item={item} />
    </li>
  ));
  let cartTotal = props.cart.reduce((prev, cur) => prev + cur.totalPrice, 0);
  return (
    <div>
      <Navbar />
      <ul className="cart-items-wrap">{cartItems}</ul>
      Total: {cartTotal}
    </div>
  );
}

export default CartPage;
