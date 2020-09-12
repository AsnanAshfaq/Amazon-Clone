import React from "react";
import { useStateValue } from "./StateProvide";

function Product({ id, desc, price, rating, imageURL }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the context API 💯

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        desc: desc,
        image: imageURL,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div
      className="container-fluid p-2 rounded"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="row">
        <div className="col">
          <h5 style={{ fontFamily: "Montserrat sans-serif" }}>
            <strong>{desc}</strong>
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            <strong>
              <b>$</b>
            </strong>
            <strong>{price}</strong>
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={Math.random()}>⭐️</p>
            ))}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center p-1">
          <img
            className="img-responsive w-50"
            src={imageURL}
            alt="Fridge Image"
          />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-start">
          <button
            className="border-0 btn"
            style={{ backgroundColor: "#c0863e" }}
            onClick={addToBasket}
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
