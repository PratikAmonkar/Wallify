import React from "react";

const FormButton = ({ width, height, title, margin, padding }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="button_div d-inline-block ml-3">
        <div className="d-flex">
          <div
            className={`btn btn-style ${width} ${height} ${margin} ${padding}`}
            onClick={handleSubmit}
          >
            <h6 className="mb-0">{title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormButton;
