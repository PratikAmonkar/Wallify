import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavbarList from "../NavbarList/NavbarList";

const Navbar = () => {
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

            {/* <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Category
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Contact us
              </Link>
            </li>
            <li className="nav-item active mr-2">
              <Link className="nav-link" to="/">
                About us
              </Link>
            </li> */}
            <Button title="Logout" width="w-100" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
