import React from "react";
import "./CartItem.css";
function CartItem(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleRemove(e.target.dataset.id);
  };
  const handleChange = (e) => {
    props.modifyCart(props.item.id, e.target.value);
  };
  return (
    <div>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <p>{props.item.totalPrice}</p>
      
      <input
        type="number"
        value={props.item.amount}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick} data-id={props.item.id}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
