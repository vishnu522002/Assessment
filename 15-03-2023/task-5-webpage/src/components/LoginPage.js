import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #505050, #0f0f0f)",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-4 m-auto px-5">
          <div className="card border-0 shadow rounded-3 my-5 bg-light">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5 fw-semibold">
                Sign In
              </h5>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email address"
                    name="accountNumber"
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    autoComplete="true"
                    name="password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid mt-4">
                  <Link
                    className="btn btn-dark text-uppercase fw-semibold"
                    type="button"
                    to={`/account`}
                  >
                    Sign in
                  </Link>
                  <p className="mt-3">New user?</p>
                  <Link
                    className="btn btn-success text-uppercase fw-semibold"
                    type="submit"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
