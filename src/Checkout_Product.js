import React from "react";
import { useStateValue } from "./StateProvide";

function Checkout_Product({ id, desc, price, rating, imageURL, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (event) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: event.target.id,
      },
    });
  };
  return (
    <div className="container-fluid mt-3">
      <div className="row d-flex flex-row">
        <div className="col-xs-3 col-lg-3 col-md-7 col-9 d-flex justify-content-center">
          {/* image ⚓️ */}
          <img className="img-responsive w-100" src={imageURL} alt="" />
        </div>
        <div className="col-xs-9 col-lg-9 col-md-5 col-3 d-flex flex-column">
          <h6>
            <strong>{desc}</strong>
          </h6>
          <h5>
            <strong>
              <b>$</b>
            </strong>
            <strong>{price}</strong>
          </h5>
          <div className="d-flex flex-row">
            {Array(rating)
              .fill()
              .map(() => (
                <p key={Math.random()}>⭐️</p>
              ))}
          </div>
          {!hideButton && (
            <div className="d-flex justify-content-start">
              <button
                className="border-0 w-auto btn"
                style={{ backgroundColor: "#c0863e" }}
                id={id}
                onClick={removeFromBasket}
              >
                Remove From Basket
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout_Product;
