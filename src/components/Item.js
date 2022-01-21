import React, { useState} from "react";

function Item({ name, category }) {
    const [inCart, setInCart] = useState(false)

    const liClass = inCart ? "in-cart" : ""
    const btnClass = inCart ? "remove" : "add"
    const btnTxt = inCart ? "Remove From Cart" : "Add to Cart"

    function handleItemBtn() {
        setInCart((inCart) => !inCart)
    }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleItemBtn}>{btnTxt}</button>
    </li>
  );
}

export default Item;
