const LoginForm = () => {
  return (
    <div className="form login-form">
      <form>
        <h3>Sign In</h3>
        <h5>
          Login to access streamlined citizen applications, empowered
          communities, and efficient governance.
        </h5>
        <div className="form-content">
          <label htmlFor="user-email">Enter username of email address</label>
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="Eg: john / johndoe@example.com"
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="minimum 8 characters password!"
          />
          <div className="flex a9382nck">
            <input
              type="checkbox"
              name="keep-me-logged"
              id="check-box"
            />
            <label htmlFor="check-box">Keep me logged!</label>
          </div>
          <input type="submit" value="Sign In" />
          <span className="m83x sup-8821">
            I forgot my password?{" "}
            <a href="/forgot-password" className="c-danger">
              click here to reset it!
            </a>
          </span>
          <span className="sup-8821">
            not a member yet?{" "}
            <a href="/sign-up" className="c-danger">
              create new account!
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
