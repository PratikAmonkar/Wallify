import React from "react";
import signinImg from "../assets/images/undraw_secure_login_pdn4 (1).svg";

const SigninScreen = () => {
  return (
    <>
      <div className="container pt-4">
        <div className=" align-items-center text-center ">
          <h2 className="mb-0">Create an account</h2>
        </div>
        <div className="row py-5 mt-lg-4 mt-sm-0 align-items-center">
          <div className="col-lg-5 col-md-12 pr-lg-5 text-center">
            <img
              src={signinImg}
              alt=""
              className="img-fluid mt-3 d-none d-lg-block"
            />
          </div>
          <div className="col-lg-6 col-md-10 mx-auto mt-4 ">
            <form>
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white"
                    autocomplete="off"
                  />
                </div>
                <div className="input-group col-md-12 col-lg-12 mb-4">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white"
                    autocomplete="off"
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0 btn-style1">
                  <button type="button" className="btn btn-primary btn-style1">
                    Signin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninScreen;
