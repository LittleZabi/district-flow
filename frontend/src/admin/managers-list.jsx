import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import { life } from "../lib/common";

const ManagersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(API_URI + "manager/all", { params: { details: 1 } })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="fade-in">
      <h1 className="form-title">Administrator's List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>fullname</th>
            <th>department</th>
            <th>email address</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => {
            return (
              <tr key={i}>
                <td>{++i}</td>
                <td>{e.fullname}</td>
                <td>{e.department}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>fullname</th>
            <th>department</th>
            <th>email address</th>
            <th>phone</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ManagersList;
