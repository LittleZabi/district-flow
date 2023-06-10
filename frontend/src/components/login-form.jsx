import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URI } from "../lib/constants";
import { useState } from "react";
import Loading from "./loading-spinner";
import { useCookies } from "react-cookie";

const LoginForm = (user) => {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(['user'])
  const submitForm = async (user) => {
    setLoading(true);
    await axios
      .post(API_URI + "user/login", user)
      .then((e) => {
        setLoading(false);
        setCookies('user', e.data.user, {path: '/', expires: new Date(new Date(new Date().getTime() + 19999999990))})
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        setMessage(e.response.data);
        console.error(e);
      });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const keepLogged = e.target.keepMeLogged.checked;
    if (email === "") {
      setMessage({ message: "Enter your email address!", variant: "alert" });
      return 0;
    }
    if (password === "") {
      setMessage({ message: "Enter your password!", variant: "alert" });
      return 0;
    }
    submitForm({ email, password, keepLogged });
  };
  return (
    <div className="form login-form">
      <form onSubmit={handleForm}>
        <h3>Sign In</h3>
        <h5>
          Login to access streamlined citizen applications, empowered
          communities, and efficient governance.
        </h5>
        <div className="form-content">
          <label htmlFor="user-email">Enter your email address</label>
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="Eg: john / johndoe@example.com"
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="minimum 8 characters password!"
          />
          <div className="flex a9382nck">
            <input
              type="checkbox"
              defaultChecked
              name="keepMeLogged"
              id="check-box"
            />
            <label htmlFor="check-box">Keep me logged!</label>
          </div>
          {message && (
            <div dangerouslySetInnerHTML={{__html: message.message}} className={`message ${message.variant}`}/>
          )}
          {loading ? <Loading /> : <input type="submit" value="Sign In" />}

          <span className="m83x sup-8821">
            I forgot my password?{" "}
            <Link to="/forgot-password" className="c-danger">
              click here to reset it!
            </Link>
          </span>
          <span className="sup-8821">
            not a member yet?{" "}
            <Link to="/sign-up" className="c-danger">
              create new account!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
