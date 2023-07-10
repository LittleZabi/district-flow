import { useState, useEffect } from "React";
import axios from "axios";
import { API_URI } from "../lib/constants";
export default (props) => {
  const [userNotLogged, setUserNotLogged] = useState(false);
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    if (props.user) getUserApplications(props.user.email);
    else setUserNotLogged(true);
  }, [props]);
  const getUserApplications = async (email) => {
    await axios
      .get(API_URI + "application/client-app", { params: { email } })
      .then((res) => {
        setApplications(res.data);
        console.log(res.data);
      })
      .catch((e) => console.error(e));
  };
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target["client-email"].value;
    console.log(email);
    if (email !== "") {
      getUserApplications(email);
    }
  };
  return (
    <div className="list-view">
      <h1>List of all applications</h1>
      {userNotLogged && (
        <form className="client-email-form" onSubmit={handleForm}>
          <label htmlFor="client-email">
            Enter your email address to find your applicaions
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter Your email address..."
              name="client-email"
            />
            <button type="submit">Find</button>
          </div>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>father</th>
            <th>address</th>
            <th>email</th>
            <th>phone</th>
            <th>subject</th>
            <th>body</th>
            <th>createdAt</th>
            <th>files</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => {
            return (
              <tr
                key={index}
                className={app.status === "Complete" ? "complete" : ""}
              >
                <td>{++index}</td>
                <td>{app.firstname}</td>
                <td>{app.lastname}</td>
                <td>{app.father}</td>
                <td>{app.address.substring(0, 50)}...</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.subject}</td>
                <td>{app.body.substring(0, 50)}...</td>
                <td>{app.createdAt}</td>
                <td className="td-image">
                  {app.files.map((img, i) => {
                    return (
                      <a href={img} alt="image">
                        Image {++i}
                      </a>
                    );
                  })}
                </td>
                <td>{app.status}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th>#</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>father</th>
            <th>address</th>
            <th>email</th>
            <th>phone</th>
            <th>subject</th>
            <th>body</th>
            <th>createdAt</th>
            <th>files</th>
            <th>status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
