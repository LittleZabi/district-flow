import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import { useNavigate } from "react-router-dom";
const AddNewManager = ({ user }) => {
  const [message, setMessage] = useState(false);
  const [settings, setSettings] = useState({});
  const navigate = useNavigate();
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
  const handleForm = async (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const dept = e.target.department.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const repassword = e.target["password-again"].value;
    if (!fullname || !fullname.length)
      setMessage({ message: "Enter manager fullname!", variant: "danger" });
    else if (!dept || dept === 'not-selected')
      setMessage({ message: "Select department of manager!", variant: "danger" });
    else if (!email || !email.length)
      setMessage({ message: "Enter email address!", variant: "danger" });
    else if (!phone || !phone.length)
      setMessage({ message: "Enter phone number!", variant: "danger" });
    else if (!password || !password.length)
      setMessage({
        message: "Enter password to secure account!",
        variant: "danger",
      });
    else if (password !== repassword)
      setMessage({ message: "Password not matched!", variant: "danger" });
    else {
      await axios
        .post(API_URI + "manager/add-new", {
          fullname,
          dept,
          email,
          phone,
          password,
        })
        .then((e) => {
          setMessage({ message: "successfully created!", variant: "success" });
          navigate("/manager");
        })
        .catch((e) => {
          setMessage({
            message: e?.response?.data?.message,
            variant: "danger",
          });
          console.error(e);
        });
    }
  };
  return (
    <div className="fade-in sign-page" style={{background:'none'}}>
      <div className="page-size">
        <div className="flex application-form" style={{boxShadow:'none'}}>
          {user && user.admin ? (
            <>
              <div className="form-left">
                <h2>Add new Manager</h2>
                <p>
                  add a new manager that can manage, update, add or remove
                  client's application, letters and users.
                </p>
                <form onSubmit={handleForm}>
                  <div className="flex-yxz">
                    <div className="a03x">
                      <label htmlFor="fullname">FULL NAME</label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="E.g. Muhammad Qasim"
                        required
                      />
                    </div>
                    <div className="a03x">
                      <label htmlFor="department">DEPARTMENT</label>
                      <select  name="department" id="department">
                        <option value="not-selected">Select Department</option>
                        {settings.departments && settings.departments.map((e, i) => {
                          return <option value={e} key={i}>{e}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="flex-yxz">
                    <div className="a03x full-w">
                      <label htmlFor="address">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E.g. example@123.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex-yxz">
                    <div className="a03x">
                      <label htmlFor="phone">PHONE NUMBER</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="E.g. 0237542164"
                        required
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
                        required
                      />
                    </div>
                    <div className="a03x">
                      <label htmlFor="password-again">
                        TYPE PASSWORD AGAIN
                      </label>
                      <input
                        type="password"
                        name="password-again"
                        id="password-again"
                        placeholder="re-type your password."
                        required
                      />
                    </div>
                  </div>
                  {message && (
                    <div className={`message ${message.variant}`}>
                      {message.message}
                    </div>
                  )}

                  <input type="submit" value="Add Managers" />
                </form>
              </div>
            </>
          ) : (
            <div className="form-left">
              <h2>Only the super admin can add new managers.</h2>
              <h5>
                If you are not a super admin, you are not permitted to change,
                update, add, or remove users and managers. If you wish to
                perform tasks of this nature, please contact the officers at the
                District Office.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddNewManager;
