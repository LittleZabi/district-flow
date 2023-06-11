import axios from "axios";
import { API_URI } from "../lib/constants";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ApplicationComments from "./admin.components/app-comments";
const ApplicationView = ({ settings, user }) => {
  const [item, setItem] = useState(false);
  const [message, setMessage] = useState(false);
  const [searchParams] = useSearchParams();
  const imagesTypes = ['jpg', 'png', 'jpeg', 'bmp']
  useEffect(() => {
    axios
      .get(API_URI + "application/get", {
        params: { id: searchParams.get("id") },
      })
      .then((e) => {
        setItem(e.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [searchParams]);
  const handleForm = async (e) => {
    e.preventDefault();
    const department = e.target.department.value;
    const comment = e.target.comment.value;
    if (comment === "")
      setMessage({
        message: "Enter your comment and then submit!",
        variant: "alert",
      });

    await axios
      .post(API_URI + "application/comment", {
        app_id: item._id,
        from: user.department,
        name: user.fullname,
        app_status: department,
        comment,
      })
      .then((res) => {
        console.log("res: ", res.data);
        setMessage({ message: "Successfully submitted!", variant: "success" });
      })
      .catch((e) => {
        setMessage({
          message: "Error occured during submittion!",
          variant: "danger",
        });
      });
  };
  return (
    <div className="fade-in view-application">
      {item && (
        <div className="view-inner">
          <div className="profile-app">
            <span>
              Applicant name: {item.firstname} {item.lastname}
            </span>
            <span>Father name: {item.father}</span>
            <span>Email address: {item.email}</span>
            <span>Phone number: {item.phone}</span>
            <span>Address: {item.address}</span>
          </div>
          <div>
            <h3>{item.subject}</h3>
            <p>{item.body}</p>
            <div className="images-332">
              {item.files.map((src, i) => {
                if(imagesTypes.includes(src.split('.').at(-1)))
                  return <a href={src} target="_blank"><img key={i} src={src} alt={item.subject} /></a>
                else
                  return <a href={src}  target="_blank">{src}</a>
              })}
            </div>
            <div
              className="flex fade-in application-form"
              style={{ boxShadow: "none" }}
            >
              <form onSubmit={handleForm} style={{ width: "100%" }}>
                <div className="flex-yxz">
                  <div className="a03x" style={{ width: "100%" }}>
                    <label htmlFor="comment">
                      Add your comment and forward application
                    </label>
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="Enter your comment on this applications."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="flex-yxz">
                  <div className="a03x">
                    <label htmlFor="department">
                      FORWARD TO OR COMPLETE THE APPLICATION STATUS
                    </label>
                    <select name="department" id="subject">
                      <option value={item.status}>{item.status}</option>
                      {settings &&
                        settings.departments.map((e) => {
                          if (item.status !== e)
                            return <option value={e}>{e}</option>;
                        })}
                    </select>
                  </div>
                </div>
                {message && (
                  <div className={`message ${message.variant}`}>
                    {message.message}
                  </div>
                )}
                <input type="submit" value="Submit" />
              </form>
            </div>
            <ApplicationComments app_id={item._id}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationView;
