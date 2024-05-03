import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark py-5">
        <div className="top d-flex">
          <div className="row">
            <div className="col-lg-1 col-sm-12"></div>

            <div className="col-lg-3 col-sm-12">
              {" "}
              <div className="footer_text">
                <h5 className="text-light">
                  <FontAwesomeIcon icon={faCartShopping} className="me-3" />
                  Best-Cart
                </h5>
                <p className="text-light mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  reiciendis voluptatibus, dicta illum magnam consectetur fuga
                  cumque impedit, tenetur, accusamus distinctio iure enim libero
                  nesciunt animi praesentium amet perferendis labore!
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-12">
              {" "}
              <div className="links text-light">
                <h5 className="text-light">Links</h5>
                <p>Home Page</p>
                <p>WishList</p>
                <p>Cart</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-12">
              {" "}
              <div className="guides text-light">
                <h5 className="text-light">Guides</h5>
                <p>React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              {" "}
              <div className="contact">
                <h5 className="text-light">Contact us</h5>
                <div className="form d-flex mt-3">
                  <input
                    placeholder="Enter your email ID"
                    type="text"
                    className="form-control"
                  />
                  <button className="btn btn-warning ms-2">Subscribe</button>
                </div>
                <div className="socials d-flex gap-3 align-items-center justify-content-center text-light mt-4">
                  <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                  <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
                  <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                  <FontAwesomeIcon icon={faFacebook} className="fa-2x" />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-12"></div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default Footer;
