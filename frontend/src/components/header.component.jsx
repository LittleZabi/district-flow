import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <nav className="flex page-size">
        <ul>
          <li className="flex logo">
            <a class="flex active" href="/">
              <img src="/images/logo.png" alt="district flow" />
              <div className="dkkk33k">
                <span>Deputy Commissioner Battagram</span>
                <span>Khyber Pakhtunkhwa</span>
              </div>
            </a>
          </li>
        </ul>
        <ul className="flex links">
          <li>
            <NavLink to="/" exactclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/application">
              Application
            </NavLink>
          </li>
	  <li>
	  	<NavLink activeclassname="active" to="/my-applications">
	  		My Applications
	  	</NavLink>
	  </li>
          <li>
            <NavLink activeclassname="active" to="/about">
              About
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink activeclassname="active" to="/sign-up">
                Sign Up
              </NavLink>
            </li>
          )}

          {user && (
            <li>
              <NavLink activeclassname="active" to="/sign-out">
                Logout
              </NavLink>
            </li>
          )}

          {user ? (
            <>
              <li className="flex user">
                <img src="/images/wan-shi-tong.webp" alt="" />
                <span>{user.firstname} {user.lastname}</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex user">
                <img src="/images/user.svg" style={{ border: "none" }} alt="" />
                <NavLink
                  activeclassname="active"
                  style={{ margin: 0 }}
                  to="/sign-in"
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
export default Header;
