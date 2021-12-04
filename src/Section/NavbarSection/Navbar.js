import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import NavbarList from "../../Components/NavbarList/NavbarList";

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
            <Button
              title="Logout"
              width="w-100"
              path="/authentication/logout"
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
