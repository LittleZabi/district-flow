import LoginForm from "../components/login-form";
import { useEffect, useState } from "react";
const SignUp = () => {
  const [message, setMessage] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-page">
      <div className="page-size">
        <div className="flex application-form">
          <div className="form-left">
            <h2>Sign Up</h2>
            <p>
            Login to access streamlined citizen applications, empowered
          communities, and efficient governance.
            </p>
            <form onSubmit={handleForm}>
              <div className="flex-yxz">
                <div className="a03x">
                  <label htmlFor="firstname">YOUR FIRST NAME</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="E.g. Muhammad"
                  />
                </div>
                <div className="a03x">
                  <label htmlFor="lastname">YOUR LAST NAME.</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="E.g. Qasim"
                  />
                </div>
              </div>

              <div className="flex-yxz">
                <div className="a03x full-w">
                  <label htmlFor="address">YOUR FULL ADDRESS</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="E.g. 123 Main Street, City, State, Postal Code"
                  />
                </div>
              </div>

              <div className="flex-yxz">
                <div className="a03x">
                  <label htmlFor="email">YOUR EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E.g. qasim123@example.com"
                  />
                </div>
                <div className="a03x">
                  <label htmlFor="phone">YOUR PHONE NUMBER</label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="E.g. +923000000"
                  />
                </div>
              </div>

              <div className="flex-yxz">
                <div className="a03x">
                  <label htmlFor="password">ENTER PASSWORD</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter minimum 8 character password."
                  />
                </div>
                <div className="a03x">
                  <label htmlFor="password-again">TYPE PASSWORD AGAIN</label>
                  <input
                    type="password"
                    name="password-again"
                    id="password-again"
                    placeholder="re-type your password."
                  />
                </div>
              </div>

              {message && (
                <div className={`message ${message.variant}`}>
                  {message.message}
                </div>
              )}

              <input type="submit" value="Register Now" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
