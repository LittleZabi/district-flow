import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import { life } from "../lib/common";
import ChartApplication from "./admin.components/chart-applications";
// import ApplicationModal from "./admin.components/application-modal";
import { Link } from "react-router-dom";
const ApplicationsList = () => {
  const [application, setApplication] = useState([]);
  useEffect(() => {
    axios
      .get(API_URI + "application/all", { params: { details: 1 } })
      .then((res) => {
        console.log(res.data);
        setApplication(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="fade-in">
      <h1 className="form-title">Citizen's Applications</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>applicant name</th>
            <th>email</th>
            <th>subject</th>
            <th>status</th>
            <th>created at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {application.map((e, i) => {
            return (
              <tr key={i} style={e.status.toLowerCase() === 'complete' ? {background: '#2fff003d'} : {}}>
                <td>{++i}</td>
                <td>{`${e.firstname}  ${e.lastname}`}</td>
                <td>{e.email}</td>
                <td>{e.subject}</td>
                <td>{e.status}</td>
                <td>{life(e.createdAt).format("D Mm YYYY")}</td>
                <td>
                  <Link to={"view?id=" + e._id}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>applicant name</th>
            <th>email</th>
            <th>subject</th>
            <th>status</th>
            <th>created at</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
      <ChartApplication data={application} />
    </div>
  );
};
export default ApplicationsList;
