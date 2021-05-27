import React from "react";
import "./CartItem.css";
function CartItem(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.handleRemove(props.item, e.target.dataset.id)
    }
  return (
    <div>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <p>{props.item.totalPrice}</p>
      <p>{props.item.amount}</p>
      <button onClick={handleClick} data-id={props.item.id}>Remove</button>
    </div>
  );
}

export default CartItem;
