import React from "react";
import "../Styles/Test.css";
import FeatureImage from "../Components/FeatureImage/FeatureImage";
import Button from "../Components/Button/Button";

const FeatureSection = () => {
  return (
    <>
      <section>
        <div className="mt-3">
          <div className="text-center">
            <h1>Image Features</h1>
          </div>
          <div className="container mb-3">
            <div className="row">
              <FeatureImage />
              <FeatureImage />
              <FeatureImage />
            </div>
            <Button title="Show more" padding="px-3" path="/category" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
