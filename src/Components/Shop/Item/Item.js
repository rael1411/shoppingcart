import React, { useState } from "react";
import "./Item.css";
function Item(props) {
  const [count, setCount] = useState(1);
  const handleClick = (e) => {
    e.preventDefault();
    let newObj = {...props.item}
    props.handleAdd(newObj, count)
    setCount(1);
  };
  return (
    <div>
      {props.item.url}
      <p>{props.item.name}</p>
      <fieldset>
        €{props.item.price}
        <button onClick={handleClick}>Add to cart</button>
        <button
          className="arrow-button"
          onClick={() => count > 0 && setCount(count - 1)}
        >
          &lt;
        </button>{" "}
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className="arrow-button" onClick={() => setCount(count + 1)}>
          &gt;
        </button>
      </fieldset>
    </div>
  );
}
export default Item;
