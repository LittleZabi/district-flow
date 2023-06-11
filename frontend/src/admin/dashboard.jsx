import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import ChartApplication from "./admin.components/chart-applications";
import ChartUsers from "./admin.components/chart-users";
const Dashboard = () => {
  const [application, setApplication] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(API_URI + "application/all")
      .then((res) => {
        console.log(res.data);
        setApplication(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get(API_URI + "user/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="fade-in">
      <h1 className="form-title">Citizen's Applications Analytics</h1>
      <ChartApplication data={application} />
      <h1 className="form-title">Users Analytics</h1>
      <ChartUsers data={users} />
    </div>
  );
};

export default Dashboard;
