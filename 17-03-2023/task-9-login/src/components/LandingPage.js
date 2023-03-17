import React from "react";
import { Link } from "react-router-dom";
import poster from "../images/poster.jpg";

export default function LandingPage() {
  let fonts = { fontVariant: "small-caps" };
  return (
    <>
      <nav className="d-flex justify-content-between mt-3">
        <h2 className="ms-lg-5 ms-3" style={fonts}>
          Policybazaar
        </h2>
        <Link className="me-lg-5 me-3 m-1 btn btn-outline-dark" to={`/login`}>
          Login
        </Link>
      </nav>

      <div className="container pt-2 pt-lg-4">
        <div className="text-dark text-center mt-5 d-lg-flex flex-lg-row-reverse align-items-lg-center">
          <img
            src={poster}
            className="img-fluid rounded col-12 col-lg-6 shadow"
            alt="Insurance ad poster"
          />
          <div className="card-body my-4 align-self-end mx-lg-5 mt-5">
            <h3 className="card-title fw-semibold mb-lg-5">
              Get Insurance to live your life without worries
            </h3>

            <p className="card-text my-4 mb-lg-5 fs-4">
              We make Health insurance more affordable for you through various
              monthly payment options and discounts provided by our Partners.
            </p>
            <a
              href="#"
              className="btn btn-dark fw-semibold w-50 fs-5 mt-2 shadow"
              style={fonts}
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
