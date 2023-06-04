const ApplicationForm = () => {
  return (
    <div className="flex application-form">
      <div className="form-left">
        <h2>Application</h2>
        <p>
          Empower Your Voice, Connect with the District. Apply and Communicate
          Efficiently. Streamline Your Applications, Share Your Concerns, and
          Shape a Better District Together.
        </p>
        <form>
          <div className="flex-yxz">
            <div className="a03x">
              <label htmlFor="firstname">YOUR FIRST NAME</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="E.g. Muhammad"
              />
            </div>
            <div className="a03x">
              <label htmlFor="lastname">YOUR LAST NAME.</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="E.g. Qasim"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x full-w">
              <label htmlFor="address">YOUR FULL ADDRESS.</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="E.g. 123 Main Street, City, State, Postal Code"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x">
              <label htmlFor="email">YOUR EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g. qasim123@example.com"
              />
            </div>
            <div className="a03x">
              <label htmlFor="phone">YOUR PHONE NUMBER.</label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="E.g. +923000000"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x full-w">
              <label htmlFor="email">YOUR APPLICATION TEXT</label>
              <textarea
                name="application"
                id="application"
                placeholder="Enter your full descriptive application."
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="form-right">
        <img src="/images/form-bg.webp" alt="form bg" />
      </div>
    </div>
  );
};
export default ApplicationForm;
