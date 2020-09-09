import React from "react";

const Header = () => {
  return (
    <div
      className="header container-fluid"
      style={{ backgroundColor: "#151319" }}
    >
      <div className="row">
        {/* header image 🔺 */}
        <div className="col-xs-2 col-lg-2 col-md-3 col-sm mt-2 ">
          <img
            className="img-responsive w-75 p-1 "
            alt="Website Logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>

        {/* header Search 🌜 */}
        <div className="col-xs-6 col-lg-7 col-md-4 col-sm mt-2">
          <div className="input-group">
            <input
              className="form-control "
              type="text"
              placeholder="Search Here"
            />
            <div className="input-group-append m- p-0">
              <span
                className="input-group-text border-0"
                style={{ backgroundColor: "#c0863e" }}
                id="basic-addon1"
              >
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>

        {/* haeder Nav 🎉 */}
        <div className="col-xs-6 col-lg-3 col-md-5 col-sm mt-2">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm text-light" style={{ userSelect: "none" }}>
              <span>
                Hello Guest
                <br />
              </span>
              <h5>Sign In</h5>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm text-light" style={{ userSelect: "none" }}>
              <span>
                Returns <br />
              </span>
              <h5>& Orders</h5>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm text-light" style={{ userSelect: "none" }}>
              <span>
                Your <br />
              </span>
              <h5>Prime</h5>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm text-light d-flex justify-content-center flex-column" style={{ userSelect: "none" }}>
              <span>
              <i className="fa fa-shopping-cart fa-2x"></i>
              </span>
              <h5 className="mx-3 my-0">0</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
