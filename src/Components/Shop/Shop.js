import React from "react";
import Navbar from "../Navbar/Navbar";
import Item from "./Item/Item";
import "./Shop.css";
import Shoe0 from "../../assets/shoes0.jpg"
import Shoe1 from "../../assets/shoes1.jpg"
import Shoe2 from "../../assets/shoes2.jpg"
import Shoe3 from "../../assets/shoes3.jpg"
import Shoe4 from "../../assets/shoes4.jpg"
import Shoe5 from "../../assets/shoes5.jpg"
import Shoe6 from "../../assets/shoes6.jpg"
import Shoe7 from "../../assets/shoes7.jpg"


function Shop(props) {
  const sampleShopItem0 = { url: Shoe0, name: "test0", price: "4", id: 0 };
  const sampleShopItem1 = { url: Shoe1, name: "test1", price: "25", id: 1 };
  const sampleShopItem2 = { url: Shoe2, name: "test2", price: "17", id: 2 };
  const sampleShopItem3 = { url: Shoe3, name: "test3", price: "40", id: 3 };
  const sampleShopItem4 = { url: Shoe4, name: "test4", price: "123", id: 4 };
  const sampleShopItem5 = { url: Shoe5, name: "test5", price: "11", id: 5 };
  const sampleShopItem6 = { url: Shoe6, name: "test6", price: "2", id: 6 };
  const sampleShopItem7 = { url: Shoe7, name: "test7", price: "7", id: 7 };

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
      <Navbar cart={props.cart} cartCounter={props.cartCounter}/>
      <h1>Shop</h1>
      <ul className="shop-items-wrap">{listItems}</ul>
    </div>
  );
}
export default Shop;
