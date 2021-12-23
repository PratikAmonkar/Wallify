import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
  return (
    <>
      <div className="container pt-lg-4">
        <div className=" align-items-center text-center ">
          <h2 className="mb-0">Welcome</h2>
        </div>
        <div className="row align-items-center py-5 mt-lg-4">
          <div className="col-md-10 col-lg-6 mx-auto mt-3">
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
                <div className="input-group col-lg-12 mb-4">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="password"
                    placeholder="Enter confirm password"
                    className="form-control bg-white"
                    autoComplete="off"
                  />
                </div>
                <div className="button_div d-inline-block ml-3">
                  <div className="d-flex">
                    <Link
                      className={`btn btn-style w-100`}
                      type="submit"
                      to="/"
                    >
                      Change
                    </Link>
                  </div>
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
