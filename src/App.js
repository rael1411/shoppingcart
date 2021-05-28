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
      tempArray[index].totalPrice =
        tempArray[index].price * tempArray[index].amount;
    }
    setCart(tempArray);
  };
  //function that removes items from cart
  const handleRemove = (id) => {
    let tempArray = cart.map((item) => {
      return { ...item };
    });
    let index = tempArray.findIndex((x) => x.id === id);
    tempArray.splice(index, 1);
    setCart(tempArray);
  };
  //function that modifies cart
  const modifyCart = (id, n) => {

    if (n > 0 || n === "") {
      let tempArray = cart.map((item) => {
        return { ...item };
      });
      let index = tempArray.findIndex((x) => x.id === id);
      console.log(tempArray[index]);
      tempArray[index].amount = n;
      tempArray[index].totalPrice =
        tempArray[index].amount * tempArray[index].price;
      setCart(tempArray);
    }
  };
  return (
    <div>
      <Routes
        cart={cart}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        modifyCart={modifyCart}
      />
    </div>
  );
}

export default App;
