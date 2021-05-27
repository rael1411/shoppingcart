import React from "react";
import "./CartItem.css";
function CartItem(props) {
  return (
    <div>
      <ul>
        <li>{props.item.name}</li>
        <li>{props.item.price}</li>
        <li>{props.item.totalPrice}</li>
        <li>{props.item.amount}</li>
      </ul>
    </div>
  );
}

export default CartItem;
