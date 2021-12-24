import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signinImg from "../assets/images/undraw_secure_login_pdn4 (1).svg";

const SigninScreen = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill the fields");
    } else {
      const res = await fetch(
        `${process.env.REACT_APP_API_KEY}/authenticate/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const data = await res.json();
      if (data.statusCode === "403") {
        return alert("Please fill the fields");
      } else if (data.statusCode === "401") {
        return alert("failed to signin a user");
      } else if (data.statusCode === "404") {
        alert("Email not register");
        history.push("/authentication/signup");
      } else {
        localStorage.setItem("userToken", data.token);
        history.push("/");
      }
    }
  };

  return (
    <>
      <div className="container pt-4">
        <div className=" align-items-center text-center ">
          <h2 className="mb-0">Welcome</h2>
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
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group col-md-12 col-lg-12 mb-4">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0 btn-style1">
                  <button
                    type="button"
                    className="btn btn-primary btn-style1"
                    onClick={handleSubmit}
                  >
                    Signin
                  </button>
                </div>
                <div className="text-center w-100 random mt-3">
                  <p className="text-muted font-weight-bold">
                    <Link
                      className="text-primary ml-2"
                      to="/authentication/forgot_password/fsdfsdfdfsagfgsdfgdfs"
                    >
                      Forgot password ?
                    </Link>{" "}
                    or Don't have an account?{" "}
                    <Link
                      className="text-primary ml-2"
                      to="/authentication/signup"
                    >
                      Signup
                    </Link>
                  </p>
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
