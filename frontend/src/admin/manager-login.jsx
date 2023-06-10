import axios from "axios";
import { Link } from "react-router-dom";
import { API_URI } from "../lib/constants";
import { useEffect, useState } from "react";
import Loading from "../components/loading-spinner";

const ManagerLogin = () => {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({});
  useEffect(() => {
    axios
      .get(API_URI + "settings")
      .then((e) => {
        setSettings(e.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  const submitForm = async (user) => {
    setLoading(true);
    setMessage(false)
    await axios
      .post(API_URI + "manager/login", user)
      .then((e) => {
        setLoading(false);
        sessionStorage.setItem('manager', JSON.stringify(e.data))
        window.location.reload()
      })
      .catch((e) => {
        setLoading(false);
        setMessage({message: e.response.data?.message, variant: 'danger'});
        console.error(e);
      });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const dept = e.target.department.value;
    if (dept === "not-selected") {
      setMessage({ message: "Select your department!", variant: "alert" });
      return 0;
    }
    if (email === "") {
      setMessage({ message: "Enter your email address!", variant: "alert" });
      return 0;
    }
    if (password === "") {
      setMessage({ message: "Enter your password!", variant: "alert" });
      return 0;
    }
    submitForm({ email, password, department:dept });
  };
  return (
    <div className="form login-form manager-login">
      <form onSubmit={handleForm}>
        <h3>Login as admin</h3>
        <h5>
          This form is only for admin's. admin can add his authentication
          details then it's can change certain options of ciziten applications.
        </h5>
        <div className="form-content">
          <label htmlFor="department">Select your department</label>
          <select name="department" id="department">
            <option value="not-selected">Select Department</option>
            {settings.departments &&
              settings.departments.map((e, i) => {
                return (
                  <option value={e} key={i}>
                    {e}
                  </option>
                );
              })}
          </select>
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
          {message && (
            <div
              dangerouslySetInnerHTML={{ __html: message.message }}
              className={`message ${message.variant}`}
            />
          )}
          {loading ? <Loading /> : <input type="submit" value="Sign In" />}
          <span className="sup-8821">
            I am not in list!{" "}
            <Link to="/manager/add-new" className="c-danger">
              add new manager.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default ManagerLogin;
