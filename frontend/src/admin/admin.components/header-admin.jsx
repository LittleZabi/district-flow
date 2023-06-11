// import {Icon, home} from '@heroicons'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
const HeaderAdmin = ({ user }) => {
  return (
    <header className="admin-header">
      <nav className="flex page-size">
        <ul>
          <li className="flex logo">
            <a activeclassname="active" href="/">
              <img src="/images/logo.png" alt="district flow" />
            </a>
          </li>
        </ul>
        <ul className="flex links">
          {user && (
            <li>
              <NavLink
                activeclassname="active"
                to="/sign-out"
                className="flex"
                style={{ alignItems: "center" }}
              >
                <ArrowLeftOnRectangleIcon width={25} />
                <span style={{ marginLeft: 5 }}>Logout</span>
              </NavLink>
            </li>
          )}

          {user ? (
            <>
              <li className="flex user">
                <img src="/images/wan-shi-tong.webp" alt="" />
                <div>
                  <span>{user.fullname}</span>
                  <span className="font-size-12 a83ksdf">{user.department}</span>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="flex user">
                <img src="/images/user.svg" style={{ border: "none" }} alt="" />
                <NavLink
                  activeclassname="active"
                  style={{ margin: 0 }}
                  to="/admin"
                >
                  Sign In
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default HeaderAdmin;
