import React from "react";
import { useStateValue } from "../StateProvider";
import "../styling/Product.css";

function Product({ id, title, image, price, rating }) {
    //state and dispatch-how data manipulated
    const [{basket},dispatch] = useStateValue();
    //console.log("the basket:", basket);
    const addToBasket = () => {
      //dispatch action(item) 
      //used to push item based on product props into data layer
      //dispatch ADD_TO_BASKET action
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

  return (
    <div className="product" >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating).fill().map((_,i) => (
          <p>⭐</p>  
        ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;



//dispatch and add to basket object once button is clicked