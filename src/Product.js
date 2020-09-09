import React from "react";

function Product({ id,desc, price, rating, imageURL }) {
  return (
    <div
      className="container-fluid p-2 rounded"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="row">
        <div className="col">
          <p>{desc}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <strong>
            <b>$</b>
          </strong>
          <strong>{price}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
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
          <button className="border-0" style={{ backgroundColor: "#c0863e" }}>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
