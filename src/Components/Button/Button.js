import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Button/Button.css";

const Button = ({ title, width, height, padding, margin, path }) => {
  return (
    <>
      <div className="button_div d-inline-block ">
        <form className="d-flex">
          <Link
            className={`btn btn-style ${width} ${height} ${margin} ${padding}`}
            type="submit"
            to={path}
          >
            {title}
          </Link>
        </form>
      </div>
    </>
  );
};

export default Button;
