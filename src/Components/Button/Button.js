import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Button/Button.css";

const Button = ({
  title,
  width,
  height,
  onSelectData,
  padding,
  margin,
  path,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectData("HelloWorld");
  };

  return (
    <>
      <div className="button_div d-inline-block ">
        {/* <form className="d-flex"> */}
        <div className="d-flex">
          <Link
            className={`btn btn-style ${width} ${height} ${margin} ${padding}`}
            type="submit"
            // to={path}
            onClick={handleSubmit}
          >
            {title}
          </Link>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Button;
