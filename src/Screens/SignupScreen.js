import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signupImg from "../assets/images/undraw_authentication_fsn5.svg";

const SignupScreen = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return alert("Please fill the fields");
    } else if (password !== confirmPassword) {
      return alert("Password not match");
    } else {
      const res = await fetch(
        "http://localhost:7000/api/v1/authenticate/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );
      const data = await res.json();
      if (data.statusCode === "403") {
        return alert("User with this email id already register");
      } else if (data.statusCode === "404") {
        return alert("Please fill the fields");
      } else if (data.statusCode === "401") {
        return alert("Password not match");
      } else if (data.statusCode === "425") {
        return alert("Failed to register");
      } else {
        history.push("/authentication/signin");
      }
    }
  };

  return (
    <>
      <div className="container pt-4">
        <div className=" align-items-center text-center ">
          <h2 className="mb-0">Create an account</h2>
        </div>
        <div className="row py-5 mt-lg-4 align-items-center">
          <div className="col-lg-5 col-md-12 pr-lg-5 text-center">
            <img
              src={signupImg}
              alt=""
              className="img-fluid mt-3 d-none d-lg-block"
            />
          </div>
          <div className="col-lg-6 col-md-10 mx-auto mt-3">
            <form>
              <div className="row">
                <div className="input-group col-md-6 col-lg-6 mb-4">
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    autoComplete="off"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="input-group col-md-6 col-lg-6 mb-4">
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    autoComplete="off"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
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
                <div className="input-group col-md-6 col-lg-6 mb-4">
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
                <div className="input-group col-md-6 col-lg-6 mb-4">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    className="form-control bg-white"
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0 btn-style1">
                  <button
                    type="button"
                    className="btn btn-primary btn-style1"
                    onClick={handleSubmit}
                  >
                    Signup
                  </button>
                </div>
                <div className="text-center w-100 random mt-3">
                  <p className="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <Link
                      className="text-primary ml-2"
                      to="/authentication/signin"
                    >
                      Login
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

export default SignupScreen;
