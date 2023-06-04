// import {Icon, home} from '@heroicons'
const Header = () => {
  return (
    <header>
      <nav className="flex page-size">
        <ul>
          <li className="flex logo">
            <a href="/">
              <img src="/images/logo.png" alt="district flow" />
            </a>
          </li>
        </ul>
        <ul className="flex links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Application</a>
          </li>
          <li>
            <a href="/">About</a>
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
