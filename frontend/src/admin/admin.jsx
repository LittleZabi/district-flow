import { Route, Routes } from "react-router-dom";
// import ManagerLogin from "../pages/admins/manager-login"
import AddNewManager from "./new-manager";
import SideBar from "./admin.components/side-bar";
import HeaderAdmin from "./admin.components/header-admin";
import Footer from "../components/footer.component";
import ManagerLogin from "./manager-login";
import Dashboard from "./dashboard";
import ApplicationsList from "./application-list";
import UsersList from "./users-list";
import ManagersList from "./managers-list";
import ApplicationView from "./application-view";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../lib/constants";
import Settings from "./settings";
import { useCookies } from "react-cookie";

const Admin = () => {
  document.body.style = "background:#03a9f40f";
  const manager = JSON.parse(sessionStorage.getItem("manager"));
  const [settings, setSettings] = useState({ subjects: [],departments: [] });
  const [cookies] = useCookies(['user'])
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
  return (
    <>
      <HeaderAdmin user={manager} />
      <main>
        <div id="admin-view">
          {manager ? (
            <div className="page-size inner-admin">
              <div className="left">
                <SideBar />
              </div>
              <div className="right">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/applications" element={<ApplicationsList />} />
                  <Route
                    path="/applications/view"
                    element={<ApplicationView settings={settings} user={manager} />}
                  />
                  <Route path="/users" element={<UsersList />} />
                  <Route path="/managers" element={<ManagersList />} />
                  <Route path="/add-new" element={<AddNewManager user={cookies.user} />} />
                  <Route path="/settings" element={<Settings settings={settings} />} />
                </Routes>
              </div>
            </div>
          ) : (
            <ManagerLogin />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Admin;
