import { Link } from "react-router-dom";
// import {Icon} from '@heroicon/react'
import {
  PlusSmallIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  BriefcaseIcon,
  CogIcon,
  InformationCircleIcon
} from "@heroicons/react/24/solid";
// import { Icon, AnnotationIcon } from '@heroicons/react';
const SideBar = () => {
  return (
    <div className="side-bar">
      <ul className="side-bar-ul">
        <li>
          <Link to="/admin/add-new">
            <ChartPieIcon /> Dashboard
          </Link>
          <Link to="/admin/add-new">
            <PlusSmallIcon /> Add new
          </Link>
          <Link to="/admin/add-new">
            <ClipboardDocumentListIcon /> Applications
          </Link>
          <Link to="/admin/add-new">
            <UsersIcon /> Users
          </Link>
          <Link to="/admin/add-new">
            <BriefcaseIcon /> Managers
          </Link>
        </li>
      </ul>

      <ul className="side-bar-ul s-x2">
        <Link to="/admin/add-new">
          <CogIcon /> Settings
        </Link>
        <Link to="/admin/add-new">
          <InformationCircleIcon /> information
        </Link>
        <span>All settings directly effect client's, citizen and managers so use and update admin panel carefully.</span>
      </ul>
    </div>
  );
};

export default SideBar;
