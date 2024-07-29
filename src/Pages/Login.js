import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";
import { Link } from  "react-router-dom";

const Login = () => {
  return (
    <div className="login-container container">
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <img className="socialDesktop" style={{height: '80%'}} src={socialDesktop} alt="Social Media Page" />
          <img className="socialMobile" src={socialMobile} alt="Social Media Page" />
        </div>
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body col-sm-12">
              <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
              <div className="mb-4 mt-4 px-5">
                <input
                  type="email"
                  className="form-control mb-3 mt-5"
                  placeholder="name@example.com"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="px-5 d-grid mt-3 mb-5">
                <button type="submit" class="custom-btn custom-btn-blue btn btn-primary w-100">Log In</button>
              </div>

              <div className="my-4 px-5">
                <hr className="text-muted"/>
                <h5 className="text-muted text-center">OR</h5>
                <hr className="text-muted"/>
              </div>

              <div className="px-5 d-grid mt-3 mb-5">
                <button type="submit" class="custom-btn custom-btn-white btn btn-primary w-100">
                  <span className="text-muted fs-6">Don't have an account?</span>
                  <Link to="/signup">
                  <span className="ms-1 text-primary fw-bold">Sign Up</span>
                  </Link>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
