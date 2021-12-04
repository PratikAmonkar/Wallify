import React from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ title, path }) => {
  return (
    <>
      <li className="nav-item active mr-3">
        <Link className="nav-link" to={`${path}`}>
          {title}
        </Link>
      </li>
    </>
  );
};

export default NavbarList;
