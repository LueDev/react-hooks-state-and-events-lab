import { setConfig } from "next/config";
import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function toggleCart(){
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={toggleCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
