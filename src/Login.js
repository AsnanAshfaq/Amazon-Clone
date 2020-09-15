import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";

function Login() {
  const History = useHistory(); //function which react router provides to change the URL dynamically 😸
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // let the user sign in  💯
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) History.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    // do some firebase registration 🎉

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) {
          History.push("/");
        } else {
          alert("Something went wrong. Try Again");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      {/* img  */}
      <div className="container-fluid m-0" style={{ userSelect: "none" }}>
        <div className="row ">
          <div className="col-sm d-flex justify-content-center m-2">
            <Link to="/" style={{ maxWidth: 200 }}>
              <img
                className="img-responsive w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="Brand Logo"
              />
            </Link>
          </div>
        </div>
        <form>
          <div className="row">
            {/* form  */}
            <div className="col-sm  d-flex justify-content-center flex-column">
              <h2 className="d-flex justify-content-center">Sign In</h2>
              <h5>Email</h5>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
                name="email"
                id=""
              />
              <h5>Password</h5>
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex justify-content-center">
              <button
                className="btn border-none w-25 mt-3"
                style={{ color: "#c0863e", backgroundColor: "black" }}
                onClick={signIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
        <div className="row mt-2">
          <div className="col-sm d-flex justify-content-center">
            <h6>
              By Signing-in you agree to Amazon's Condition of Use & Sale.
              Please see our Policy Notice, our Cookies Notice and our
              Interest-Based Ads
            </h6>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm d-flex justify-content-center">
            <button
              className="btn border-none"
              style={{ backgroundColor: "#c0863e", color: "black" }}
              onClick={register}
            >
              Create Your Amazon Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
