import React from "react";
import Navbar from "../Navbar/Navbar";
import Item from "./Item/Item";
import "./Shop.css";
function Shop(props) {
  const sampleShopItem0 = { url: "", name: "test0", price: "4", id: 0 };
  const sampleShopItem1 = { url: "", name: "test1", price: "25", id: 1 };
  const sampleShopItem2 = { url: "", name: "test2", price: "17", id: 2 };
  const sampleShopItem3 = { url: "", name: "test3", price: "40", id: 3 };
  const sampleShopItem4 = { url: "", name: "test4", price: "123", id: 4 };
  const sampleShopItem5 = { url: "", name: "test5", price: "11", id: 5 };
  const sampleShopItem6 = { url: "", name: "test6", price: "2", id: 6 };
  const sampleShopItem7 = { url: "", name: "test7", price: "7", id: 7 };

  let shopItems = [];
  shopItems.push(sampleShopItem0);
  shopItems.push(sampleShopItem1);
  shopItems.push(sampleShopItem2);
  shopItems.push(sampleShopItem3);
  shopItems.push(sampleShopItem4);
  shopItems.push(sampleShopItem5);
  shopItems.push(sampleShopItem6);
  shopItems.push(sampleShopItem7);
  const listItems = shopItems.map((item) => (
    <li key={item.id}>
      <Item item={item} handleAdd={props.handleAdd} />
    </li>
  ));

  return (
    <div>
      <Navbar cart={props.cart}/>
      <h1>Shop</h1>
      <ul className="shop-items-wrap">{listItems}</ul>
    </div>
  );
}
export default Shop;
