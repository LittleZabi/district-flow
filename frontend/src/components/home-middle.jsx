import LoginForm from "./login-form";

const HomeMiddle = () => {
  return (
    <div className="middle-view">
      <div className="page-size flex">
        <div className="mid-left">
          <h1>Welcome to DistrictFlow</h1>
          <h3>Empowering Citizens</h3>
          <p>
            Unlocking the Potential of Digital Governance DistrictFlow
            Empowering District Officers, Revolutionizing Citizen Services, and
            Transforming Administrative Processes for a Connected and Efficient
            Future!
          </p>
          <button className="new-app-btn">New Application</button>
        </div>
        <div className="flex mid-right">
          <img src="/images/bg-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default HomeMiddle;
