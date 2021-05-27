import Routes from "./Routes"
import React, {useState} from "react"
import "./App.css"
function App() {
  const [cart, setCart] = useState([]);
  //function that adds items to cart
  const handleAdd = (newItem, n) => {
    let tempArray = cart.map(item =>{
      return{...item}
    })
    newItem.totalPrice = newItem.price * n;
    newItem.amount = n;
    tempArray.push(newItem);
    setCart(tempArray)
  }
  return (
    <div>
      <Routes cart={cart} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
