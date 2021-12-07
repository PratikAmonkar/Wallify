import React from "react";

const ServiceView = ({ imageName, description, orderNum }) => {
  return (
    <>
      <div className={`col-md-6 col-lg-5 order-${orderNum}  text-end`}>
        <img className="img-fluid" src={imageName} alt="" />
      </div>
      <div className="col-md-6 col-lg-7  justify-content-center align-self-center">
        <h1>{description}</h1>
      </div>
    </>
  );
};

export default ServiceView;
