import { NavLink } from "react-router-dom";
import {
  PlusSmallIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  BriefcaseIcon,
  CogIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
const SideBar = () => {
  return (
    <div className="fade-in side-bar">
      <ul className="side-bar-ul">
        <li>
          <NavLink to="/admin/">
            <ChartPieIcon /> Dashboard
          </NavLink>
          <NavLink to="/admin/applications">
            <ClipboardDocumentListIcon /> Applications
          </NavLink>
          <NavLink to="/admin/users">
            <UsersIcon /> Users
          </NavLink>
          <NavLink to="/admin/managers">
            <BriefcaseIcon /> Administrators
          </NavLink>
          <NavLink to="/admin/add-new">
            <PlusSmallIcon /> Add new manager
          </NavLink>
        </li>
      </ul>

      <ul className="side-bar-ul s-x2">
        <NavLink to="/admin/settings">
          <CogIcon /> Settings
        </NavLink>
        <NavLink to="/admin/information">
          <InformationCircleIcon /> information
        </NavLink>
        <span>
          All settings directly effect client's, citizen and managers so use and
          update admin panel carefully.
        </span>
      </ul>
    </div>
  );
};

export default SideBar;
