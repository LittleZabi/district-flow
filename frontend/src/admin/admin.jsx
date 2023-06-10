import { Route, Routes } from "react-router-dom";
// import ManagerLogin from "../pages/admins/manager-login"
import AddNewManager from "./add-new";
import SideBar from "./admin.components/side-bar";
import HeaderAdmin from "./admin.components/header-admin";
import Footer from "../components/footer.component";
import ManagerLogin from "./manager-login";
import Dashboard from './dashboard'

const Admin = () => {
  document.body.style = "background:#03a9f40f";
  const manager = JSON.parse(sessionStorage.getItem("manager"));
  return (
    <>
      <HeaderAdmin />
      <main>
        <div id="admin-view">
          {manager ? (
            <div className="inner-admin">
              <div className="left">
                <SideBar />
              </div>
              <div className="right">
                <Routes>
                  <Route path="/" element={<Dashboard/>} />
                  <Route path="/add-new" element={<AddNewManager />} />
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
