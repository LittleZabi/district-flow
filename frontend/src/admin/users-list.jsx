import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../lib/constants";
import { life } from "../lib/common";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(API_URI + "user/all", { params: { details: 1 } })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="fade-in">
      <h1 className="form-title">Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>fullname</th>
            <th>father name</th>
            <th>email address</th>
            <th>phone</th>
            <th>created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => {
            return (
              <tr key={i}>
                <td>{++i}</td>
                <td>{`${e.firstname}  ${e.lastname}`}</td>
                <td>{e.father}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{life(e.createdAt).format("D Mm YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>fullname</th>
            <th>father name</th>
            <th>email address</th>
            <th>phone</th>
            <th>created At</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default UsersList;
