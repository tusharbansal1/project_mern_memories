import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { setUserSession } from "../../utils/common";

const Login = (props) => {
  const navigate = useNavigate();
  const user = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/user/login", {
        user: user.value,
        password: password.value,
      })
      .then((response) => {
        setUserSession(response.data.data.token, response.data.data.user);
        console.log("-------------->", response);
        navigate("/memories");
      })
      .catch((error) => {
        console.log("hiiii", error.response.data);
        setError(error.response.data.message);
      });
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                <div className="divider d-flex align-items-center my-4">
                  <p className="heading head">Hello User</p>
                </div>
                <div className="form-outline mb-4">
                  <input
                    className="form-control form-control-lg input1"
                    type="text"
                    {...user}
                    autoComplete="new-password"
                    placeholder="Enter Username/email"
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    className="form-control form-control-lg input2"
                    type="password"
                    {...password}
                    autoComplete="new-password"
                    placeholder="Enter password"
                  />
                </div>
                {error && (
                  <>
                    <small style={{ color: "red" }}>{error}</small>

                    <br />
                  </>
                )}

                <a
                  className="btn btn-primary btn-lg login"
                  type="button"
                  value={loading ? "Loading..." : "Login"}
                  onClick={handleLogin}
                  disabled={loading}
                >
                  Login
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer /> */}
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
