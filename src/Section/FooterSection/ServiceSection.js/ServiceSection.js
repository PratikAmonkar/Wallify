import React from "react";
import ServiceView from "../../../Components/ServiceView/ServiceView";
import "../../../Styles/Test.css";
import responsiveImg from "../../../assets/images/undraw_responsive_re_e1nn.svg";
import realtimesyncImg from "../../../assets/images/undraw_real_time_sync_re_nky7.svg";

const ServiceSection = () => {
  return (
    <>
      <section className="test">
        <div className="container">
          <div className="row ">
            <ServiceView
              imageName={responsiveImg}
              description="Enjoy our responsive website it's work in all devices"
              orderNum="0"
            />
            <ServiceView
              imageName={realtimesyncImg}
              description="Enjoy our responsive website it's work in all devices"
              orderNum="1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
