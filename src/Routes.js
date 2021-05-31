import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Components/Shop/Shop";
import CartPage from "./Components/CartPage/CartPage";

function Routes(props){
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage cart={props.cart} cartCounter={props.cartCounter}/>
        </Route>
        <Route exact path="/shoppingcart">
          <Homepage cart={props.cart} cartCounter={props.cartCounter}/>{" "}
        </Route>
        <Route exact path="/shop">
          <Shop cart={props.cart} handleAdd={props.handleAdd} cartCounter={props.cartCounter}/>
        </Route>
        <Route exact path="/cart">
          <CartPage cart={props.cart} handleRemove={props.handleRemove} modifyCart={props.modifyCart} cartCounter={props.cartCounter}/>
        </Route>
      </Switch>
    </BrowserRouter></div>
  );
};

export default Routes;
