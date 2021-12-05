import React from "react";
import HeroSectionImg from "../../assets/images/undraw_images_re_0kll.svg";
import Button from "../../Components/Button/Button";

const HeroSection = () => {
  return (
    <>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 order-0 order-md-1 text-end">
              <img className="img-fluid" src={HeroSectionImg} alt="" />
            </div>
            <div className="col-md-6 col-lg-6 text-md-start text-center pt-5 justify-content-center align-self-center">
              <h1 className="mb-3">Get your favourite wallpaper here</h1>
              <Button title="Explore" width="w-100" path="category" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
