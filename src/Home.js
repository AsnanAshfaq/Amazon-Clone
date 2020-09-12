import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="container-fluid ">
      {/* background image 💯 */}
      <div className="row">
        <img
          className="img-responsive w-100 background-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
          alt="Background Image"
        />

        {/* showing products  */}
        <div
          className="container-fluid"
          style={{ marginTop: 0, userSelect: "none" }}
        >
          {/* row with two products 🅰️🗡 */}
          <div className="row ">
            <div className="col-xs-6 col-lg-6 col-md-6 d-flex flex-column">
              <Product
                id="11243241"
                desc="Michael Kors Lexington Chronograph Stainless Steel Watch"
                price="135.5"
                rating={2}
                imageURL="https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_SS350_.jpg"
              />
            </div>
            <div className="col-xs-6 col-lg-6 col-md-6 d-flex flex-column">
              <Product
                id="1124323241"
                desc="Apple iPad with WiFi, 128GB, Space Gray (2018 Model) (Renewed)"
                price="4.4"
                rating={1}
                imageURL="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156"
              />
            </div>
          </div>
          {/* row with three products 👽🎈 */}
          <div className="row mt-2">
            <div className="col-xs-4 col-lg-4 col-md-4">
              <Product
                id="11200241"
                desc='YuanKe Zhang Perfect RF Roger Federer Wimbledon Tennis T Shirt'
                price="16.00"
                rating={5}
                imageURL="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71bjRUrgJ-L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png"
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4">
              <Product
                id="11135433241"
                desc='Apple 13.3" MacBook Pro with Touch Bar, Intel Core i5 Quad-Core, 8GB RAM, 128GB SSD - Mid 2019, Space Gray, MUHN2LL/A (Renewed)'
                price="4.4"
                rating={4}
                imageURL="https://images-na.ssl-images-amazon.com/images/I/71i49M4hv2L._AC_SL1500_.jpg"
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4">
              <Product
                id="3543754"
                desc='LG 55UN7300PUF Alexa Built-In UHD 73 Series 55" 4K Smart UHD TV (2020)'
                price="4.4"
                rating={4}
                imageURL="https://images-na.ssl-images-amazon.com/images/I/81CnumJVUGL._AC_SL1500_.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
