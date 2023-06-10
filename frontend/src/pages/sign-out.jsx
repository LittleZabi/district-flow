import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SignOut = (user) => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const handleForm = (e) => {
    e.preventDefault();
    removeCookie('user')
    navigate('/sign-in')
  }
  return (
    <div className="sing-out-outer">
    <div className="flex fade-in sign-out application-form">
      <div className="form-left">
        <h2>Sign Out</h2>
        <p>
          Thank you for being a part of our community. By signing out, you will
          no longer have access to our community, its features, and all the
          conveniences it offers.
        </p>
        <form onSubmit={handleForm}>
          <input type="submit" value="Logout" />
        </form>
      </div>
      <div className="form-right">
        <h3>When you sign out, you will be unable to.</h3>
        <ul>
          <li>
            Participate in discussions and engage with fellow community members.
          </li>
          <li>
            Access exclusive features and content tailored to your interests.
          </li>
          <li>
            Enjoy the ease and convenience of our platform's functionality.
          </li>
          <li>
            Take advantage of special offers, promotions, and personalized
            experiences.
          </li>
          <li>
            Stay up to date with the latest news, updates, and announcements.
          </li>
        </ul>
        <p>
          We value your presence in our community and encourage you to sign in
          again whenever you're ready to rediscover the benefits and enjoy
          everything our platform has to offer.
        </p>
        <p>Thank you for your understanding and continued support.</p>
      </div>
    </div>
    </div>
  );
};
export default SignOut;
