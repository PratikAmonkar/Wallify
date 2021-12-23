import React from "react";
import Navbar from "../Section/NavbarSection/Navbar";
import ContactusImg from "../assets/images/undraw_contact_us_-15-o2.svg";
import { Link } from "react-router-dom";
import { useUser } from "../Contexts/UserContext";

const ContactusScreen = () => {
  const { currentUserData } = useUser();
  console.log(currentUserData);
  const { firstName, lastName, email } = currentUserData;

  return (
    <>
      <Navbar />
      <div className="container pt-lg-4">
        <div className="row align-items-center py-5 mt-lg-4">
          <div className="col-lg-5 col-md-12 pr-lg-5 text-center">
            <img
              src={ContactusImg}
              alt=""
              className="img-fluid d-none d-lg-block"
            />
          </div>
          <div className="col-md-10 col-lg-6 mx-auto mt-3">
            <form>
              <div className="row">
                <div className="input-group col-md-6 col-lg-6 mb-4">
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control bg-white"
                    autoComplete="off"
                    value={firstName}
                  />
                </div>
                <div className="input-group col-md-6 col-lg-6 mb-4">
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control bg-white"
                    autoComplete="off"
                    value={lastName}
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white"
                    autoComplete="off"
                    value={email}
                  />
                </div>
                <div className="col-md-12 col-lg-12 mb-4 form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter your feedback"
                    rows="5"
                  ></textarea>
                </div>
                <div className="button_div d-inline-block ">
                  <div className="d-flex">
                    <Link
                      className={`btn btn-style w-100`}
                      type="submit"
                      // to={path}
                      // onClick={handleSubmit}
                    >
                      Submit
                    </Link>
                    {/* </form> */}
                  </div>
                </div>
                {/* <FormButton title="Submit" width="w-100" padding="py-2"/> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusScreen;
