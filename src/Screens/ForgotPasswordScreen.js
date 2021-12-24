import React from "react";
import forgotPasswordImg from "../assets/images/undraw_forgot_password_re_hxwm.svg";

const ForgotPasswordScreen = () => {
  return (
    <>
      <div className="container pt-4">
        <div className=" align-items-center text-center ">
          <h2 className="mb-0">Forgot password</h2>
        </div>
        <div className="row py-5 mt-lg-4 mt-sm-0 align-items-center">
          <div className="col-lg-5 col-md-12 pr-lg-5 text-center">
            <img
              src={forgotPasswordImg}
              alt=""
              className="img-fluid mt-3 d-none d-lg-block"
            />
          </div>
          <div className="col-lg-6 col-md-10 mx-auto mt-4 ">
            <form>
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    className="form-control bg-white"
                    autoComplete="off"
                  />
                </div>
                <div className="input-group col-md-12 col-lg-12 mb-4">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter confirm password"
                    className="form-control bg-white"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0 btn-style1">
                  <button type="button" className="btn btn-primary btn-style1">
                    Submit
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

export default ForgotPasswordScreen;
