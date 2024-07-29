import React from 'react'
import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";
import { Link } from  "react-router-dom";

const Signup = () => {
  return (
    <div className="login-container container">
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <img className="socialDesktop" style={{height: '90%'}} src={socialDesktop} alt="Social Media Page" />
          <img className="socialMobile" src={socialMobile} alt="Social Media Page" />
        </div>
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body col-sm-12">
              <h4 className="card-title text-center mt-2 fw-bold">Sign Up</h4>
              <div className="mb-4 mt-4 px-5">
                <input
                  type="tel"
                  className="form-control mt-6 mb-3"
                  placeholder="Mobile Number"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="name@example.com"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="px-5 d-grid mt-3 mb-5">
                <button type="submit" class="custom-btn custom-btn-blue btn btn-primary w-100">Sign Up</button>
              </div>

              <div className="my-4 px-5">
                <hr className="text-muted"/>
                <h5 className="text-muted text-center">OR</h5>
                <hr className="text-muted"/>
              </div>

              <div className="px-5 d-grid mt-3 mb-5">
                <button type="submit" class="custom-btn custom-btn-white btn btn-primary w-100">
                  <span className="text-muted fs-6">Already have an account?</span>
                  <Link to="/login">
                  <span className="ms-1 text-primary fw-bold">Log In</span>                  
                  </Link>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
