import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import {useNavigate   } from 'react-router-dom'
import { useCookies } from 'react-cookie';
const SignUp = () => {
  const [message, setMessage] = useState(false);
  const [user, setUser] = useState({});
  const navigate  = useNavigate ()
  const [cookies, setCookies] = useCookies(['user'])
  const userHandler = async () => {
    await axios
      .post(API_URI + "user/add", user)
      .then((e) => {
        let res = e.data
        setMessage({message: res.message, variant: res.variant})
        setCookies('user', e.data.user, {path: '/'})
        navigate('/');
      })
      .catch((e) =>
        setMessage({
          message: `Error: ${e.response?.data?.message ?? e.message}`,
          variant: "danger",
        })
      );
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (!user.firstname || !user.firstname.length)
      setMessage({ message: "Enter firstname!", variant: "danger" });
    else if (!user.lastname || !user.lastname.length)
      setMessage({ message: "Enter lastname!", variant: "danger" });
    else if (!user.father || !user.father.length)
      setMessage({ message: "Enter your father name!", variant: "danger" });
    else if (!user.address || !user.address.length)
      setMessage({ message: "Enter your full address!", variant: "danger" });
    else if (!user.email || !user.email.length)
      setMessage({ message: "Enter your email address!", variant: "danger" });
    else if (!user.phone || !user.phone.length)
      setMessage({ message: "Enter your phone number!", variant: "danger" });
    else if (!user.password || !user.password.length)
      setMessage({ message: "Enter your password!", variant: "danger" });
    else if (user.password.length < 8)
      setMessage({
        message: "Password must be greater than 8 characters!",
        variant: "danger",
      });
    else if (!(user.password == user.repassword) || !user.password.length)
      setMessage({
        message: "Password not match try again!",
        variant: "danger",
      });
    else {
      userHandler();
    }
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
                    onChange={(e) => {
                      setUser({ ...user, firstname: e.target.value });
                    }}
                  />
                </div>
                <div className="a03x">
                  <label htmlFor="lastname">YOUR LAST NAME.</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="E.g. Qasim"
                    onChange={(e) => {
                      setUser({ ...user, lastname: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="flex-yxz">
                <div className="a03x">
                  <label htmlFor="father-name">YOUR FATHER NAME</label>
                  <input
                    type="text"
                    name="father-name"
                    id="father-name"
                    placeholder="E.g. Abdullah"
                    onChange={(e) => {
                      setUser({ ...user, father: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setUser({ ...user, address: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setUser({ ...user, phone: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setUser({ ...user, repassword: e.target.value });
                    }}
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
