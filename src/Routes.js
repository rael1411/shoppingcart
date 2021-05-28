import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Components/Shop/Shop";
import CartPage from "./Components/Shop/CartPage/CartPage";

function Routes(props){
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage cart={props.cart} />
        </Route>
        <Route exact path="/shoppingcart">
          <Homepage cart={props.cart} />{" "}
        </Route>
        <Route exact path="/shop">
          <Shop cart={props.cart} handleAdd={props.handleAdd} />
        </Route>
        <Route exact path="/cart">
          <CartPage cart={props.cart} handleRemove={props.handleRemove} modifyCart={props.modifyCart} />
        </Route>
      </Switch>
    </BrowserRouter></div>
  );
};

export default Routes;
