import React from "react";
import { Link } from "react-router-dom";
import NavbarList from "../../Components/NavbarList/NavbarList";

const Navbar = () => {
  const loggedOutUser = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("userToken");
    } catch (err) {
      alert("User not logged out");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          Wallify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavbarList title="Home" path="/" />
            <NavbarList title="Category" path="/category" />
            <NavbarList title="Contact us" path="/contact" />
            <NavbarList title="About us" path="/about" />
            <div className="button_div d-inline-block ml-3">
              <div className="d-flex" onClick={loggedOutUser}>
                <Link
                  className={`btn btn-style w-100`}
                  type="submit"
                  to="/authentication/signin"
                >
                  Logout
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
