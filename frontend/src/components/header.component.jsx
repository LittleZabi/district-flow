// import {Icon, home} from '@heroicons'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="flex page-size">
        <ul>
          <li className="flex logo">
            <a activeClassName="active" href="/">
              <img src="/images/logo.png" alt="district flow" />
            </a>
          </li>
        </ul>
        <ul className="flex links">
          <li>
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/application">Application</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/sign-up">Sign Up</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li className="flex user">
            <img src="/images/wan-shi-tong.webp" alt="" />
            <span>LittleZabi</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
