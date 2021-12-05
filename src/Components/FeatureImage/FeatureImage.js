import React from "react";
import DumyImg from "../../assets/images/undraw_optimize_image_re_3tb1.svg";

const FeatureImage = () => {
  return (
    <>
      <div className="col-md-4 col-10 col-xxl-4 mx-auto">
        <figure>
          <img src={DumyImg} alt="" className="img-fluid" />
        </figure>
      </div>
    </>
  );
};

export default FeatureImage;
