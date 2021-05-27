import Routes from "./Routes";
import React, { useState } from "react";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);
  //function that adds items to cart
  const handleAdd = (newItem, n, id) => {
    let tempArray = cart.map((item) => {
      return { ...item };
    });
    //checks if the item is already in the cart
    //if it is it adds to the total amount, otherwise creates new entry
    let index = tempArray.findIndex((x) => x.id === id);
    if (index === -1) {
      newItem.totalPrice = newItem.price * n;
      newItem.amount = n;
      tempArray.push(newItem);
    } else {
      tempArray[index].amount += n;
      newItem.totalPrice = newItem.price * n;
    }
    setCart(tempArray);
  };
  //function that removes items from cart
  const handleRemove = (item, id) => {
    let tempArray = cart.map((item) => {
      return { ...item };
    });
    let index = tempArray.findIndex((x) => x.id === id);
    tempArray.splice(index, 1);
    setCart(tempArray);
  };
  return (
    <div>
      <Routes cart={cart} handleAdd={handleAdd} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
